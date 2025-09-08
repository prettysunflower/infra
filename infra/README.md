# prettysunflower's infra

The prettysunflower's infra is divided in two main clusters.

- Cluster `sekibanki`: The main cluster, (self-)hosting most components of this infra
- Cluster `seija`: The "this is important and I really everything to be up anytime" cluster, hosted by Hetzner in Falkenstein

## Clusters

### Cluster sekibanki

**Host:** Yuyuko<br>
**k8s storage:** NFS \
**Talos VMs:** 3 - Gleba, Vulcanus, Fulgora (All are controlplane and workers)

#### Database

##### PostgreSQL

TODO: Move that to CloudNativePG

**Postgres version:** 17<br>
**IP address:** 100.110.40.2 (tailscale)

### Cluster seija

**Location:** Falkenstein (DE)<br>
**Host:** Hetzner VMs
**k8s storage:** hcloud-csi
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

- 91.99.183.134
- 2a01:4f8:c013:c026::1
- 10.11.0.5 (Hetzner bridge)
- 100.68.170.44 (tailscale)

### yul.okina

**Type:** Koumbit VPS
**Location:** Montréal (CA_QC)
**IP addresses:**<br>

- 199.58.81.150
- 100.94.59.38 (tailscale)
