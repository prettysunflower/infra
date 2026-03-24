[working-directory('infra/dns')]
dns:
    dnscontrol push

pvmigrate $namespace $pvcname:
    #!/usr/bin/env fish
    if string match -q -- "*-temp" $pvcname
    	set -l destpvcname $(string replace -- "-temp" "" $pvcname)
        pv-migrate \
                --source-namespace="$namespace" \
                --source="$pvcname" \
                --dest-namespace="$namespace" \
                --dest="$destpvcname"
    else
        pv-migrate \
                --source-namespace="$namespace" \
                --source="$pvcname" \
                --dest-namespace="$namespace" \
                --dest="$pvcname-temp"
    end
