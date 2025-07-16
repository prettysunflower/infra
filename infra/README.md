# Infra

The cluster is formed by three Proxmox hosts, hosting in total 6 Talos virtual machines. All of them are linked through Wireguard and kubespan. They're also connected to Tailscale to allow accessing other hosts.

## Host `yuyuko`

The main server. It also contains most of the computer power and most of the storage (a ZFS array with 64.56 TiB of raw storage!). This is also the most painful to upgrade things on / reboot due to... reasons.

**Location**: Montréal (Home)

**Virtual machines**:
- yukari (controlplane)
	- Address: 10.0.0.240
- ran (worker)
	- Address: 10.0.0.241

### Internal gateway `suika`

Outside of the Kubernetes cluster is the `suika` virtual machine. I didn't want to fiddle around _too_ much with MetalLB and Load Balancers, so this virtual machine runs NGINX as a way to provide HTTPS service to the cluster with more memorable names (because ``.

## Host `niwatori`

The 30$ eBay computer. It's mainly there to provide some redundency and a bit of storage (a 1TB SSD is in there)

**Location**: Montréal (Home)

**Virtual machines**:
- fujiwara-no-mokou (worker)
	- Address: 10.0.0.245

## Host `yuuma`

Hetzner's server auctions are great! This is my offsite server to provide a stable endpoint in Europe.

**Location**: Falkenstein

**Virtual machines**:
- yukari (controlplane)
	- Address: 10.0.0.240
- ran (worker)
	- Address: 10.0.0.241

### External gateway `okina`

Outside of the Kubernetes cluster is the `okina` virtual machine. Same reasons as for `suika`, but for outside people to my infra. It runs Caddy to do that.