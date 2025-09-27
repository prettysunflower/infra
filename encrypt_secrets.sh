#!/usr/bin/fish

function encrypt_file -a filename outfile_filename
	set file_md5 (md5sum $filename | awk '{ print $1 }')
	set old_file_md5 (cat .encryption_cache.json | jq -r (string join '' ".\"" $filename "\""))

	if test "$file_md5" != "$old_file_md5"
		echo "Re-encrypting file $filename"
		echo "sops -e --output $outfile_filename $filename"
		sops -e --output $outfile_filename $filename
		set old_json (cat .encryption_cache.json)
		echo $old_json | jq (string join '' ".\"" $filename "\" = \"" (md5sum $filename | awk '{ print $1 }') "\"")  > .encryption_cache.json
	end
end

encrypt_file infra/okina/caddy/certs/pad.koumbit.net/cert.pem.nocopy infra/okina/caddy/certs/pad.koumbit.net/cert.pem.sops

for file in **/secrets.yaml;
	encrypt_file \
		$file \
		(path change-extension .sops.yaml $file)
end

for file in **/local_settings.py;
	encrypt_file \
		$file \
		(path change-extension .sops.py $file)
end

for file in **/key.gpg;
	encrypt_file \
		$file \
		(path change-extension .sops.gpg $file)
end

for file in infra/okina/**/*.nocopy;
	encrypt_file \
		$file \
		(path change-extension .sops $file)
end