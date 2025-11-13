# prettysunflower's infra

The prettysunflower's infra is divided in two main clusters.

- Cluster `sekibanki`: The main cluster, (self-)hosting most components of this infra
- Cluster `yuiman`: The "this is important and I really everything to be up anytime" cluster, hosted by Hetzner in Falkenstein

## Clusters

### Cluster sekibanki

**Host:** Proxmox Bare Metal - yuyuko.prettysunflower.moe<br>
**k8s storage:** NFS \
**Talos VMs:** 3 - Gleba, Vulcanus, Fulgora (All are controlplane and workers)

#### Database

##### PostgreSQL

TODO: Move that to CloudNativePG

**Postgres version:** 17<br>
**IP address:** 100.110.40.2 (tailscale)

### Cluster yuiman

**Location:** Falkenstein (DE)<br>
**Host:** Proxmox Auction Server - iwanagi.prettysunflower.moe
**k8s storage:** NFS
**Talos VMs:** 3 - Gleba, Vulcanus, Fulgora (All are controlplane and workers)

#### Database

##### PostgreSQL

TODO: Move that to CloudNativePG

**Postgres version:** 17<br>
**IP address:** 100.68.170.44 (tailscale)

## Hosts

### Host yuyuko

**Location:** Montréal (CA_QC)
**OS:** Proxmox 9.0.5

#### ZFS pool

    yuyuko
    |
    |-- raidz1-0
    |---|
    |---|-- 18 TB WDC WD181KFGX-68
    |---|-- 18 TB WDC WD181KFGX-68
    |---|-- 18 TB WDC WD181KFGX-68
    |---|-- 18 TB TOSHIBA MG09ACA1
    |
    |-- raidz1-1
    |---|
    |---|-- 8 TB WDC WD8003FFBX-6
    |---|-- 8 TB WDC WD8003FFBX-6
    |---|-- 4 TB WDC WD40EFZX-68A
    |---|-- 8 TB WDC WD80EFZZ-68B
    |
    |-- special
    |---|
    |---|-- mirror-2
    |---|---|
    |---|---|-- 1 TB Samsung SSD 870
    |---|---|-- 1 TB Samsung SSD 870

#### Backups

Backups are done hourly with Restic to a Hetzner Storage Box

## Gateways

We're using VMs with Caddy / HAProxy as gateways to the infra. Convention for naming them are `<3 letters code of gateway location><optional: number if multiple gateway somewhere>.okina.prettysunflower.moe`

### fsn.okina

**Type:** Hetzner VM<br>
**Location:** Falkenstein (DE)
**IP addresses:**<br>

- 23.88.71.121 (NAT operated by OPNsense)
- 2a01:4f8:272:ea00:be24:11ff:fe33:fa90
- 100.108.98.123 (tailscale)
