#!/usr/bin/env fish

argparse --min-args=1 -- $argv
or return

set -l remote_hostname $argv[1]
set -l hostKey $(ssh-keyscan -qt ed25519 $remote_hostname | grep -o "ssh-ed25519.*")

if ! test -n "$hostKey"
    echo "Host not found, cannot continue"
    return
end

echo "Host key: $hostKey"

echo $hostKey > tempHostKey.pub

ssh-keygen -s roles/ssh-config/files/yubikey_ca.pub -D /usr/lib/libykcs11.so -I "$remote_hostname" -h -n "$remote_hostname" ./tempHostKey.pub

set -l signedHostKey $(cat tempHostKey-cert.pub)

echo "Signature: $signedHostKey"

rm tempHostKey.pub tempHostKey-cert.pub
