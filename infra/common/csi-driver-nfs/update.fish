#!/usr/bin/fish

argparse -N 1 -X 1 'h/help' -- $argv
or return

if set -ql _flag_h
    echo "Usage: update.fish [-h | --help] VERSION" >&2
    return 1
end

set -l csi_version $_flag_version
set -l download_folder (dirname (status --current-filename))

curl -L -o "$download_folder/csi-nfs-controller.yaml" "https://raw.githubusercontent.com/kubernetes-csi/csi-driver-nfs/refs/heads/master/deploy/$csi_version/csi-nfs-controller.yaml"
curl -L -o "$download_folder/csi-nfs-driverinfo.yaml" "https://raw.githubusercontent.com/kubernetes-csi/csi-driver-nfs/refs/heads/master/deploy/$csi_version/csi-nfs-driverinfo.yaml"
curl -L -o "$download_folder/csi-nfs-node.yaml" "https://raw.githubusercontent.com/kubernetes-csi/csi-driver-nfs/refs/heads/master/deploy/$csi_version/csi-nfs-node.yaml"
curl -L -o "$download_folder/rbac-csi-nfs.yaml" "https://raw.githubusercontent.com/kubernetes-csi/csi-driver-nfs/refs/heads/master/deploy/$csi_version/rbac-csi-nfs.yaml"