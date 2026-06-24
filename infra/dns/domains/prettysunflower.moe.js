/// <reference path="../types-dnscontrol.d.ts" />

function prettysunflower_moe_common_okina(dns_type) {
  return [
    okina("@", dns_type),
    okina("www", dns_type),
    okina("okina", dns_type),
    okina("qr", dns_type),
    okina("smtp", dns_type),
    okina("kms", dns_type),
    okina("data", dns_type),
    okina("wiki", dns_type),
    okina("invidious", dns_type),
    okina("gist", dns_type),
    okina("files", dns_type),
    okina("deneb.sonarr", dns_type),
    okina("deneb.radarr", dns_type),
    okina("books", dns_type),
    okina("budget", dns_type),
    okina("passwords", dns_type),
  ];
}

D(
  "prettysunflower.moe!common",
  REG_NONE,
  A("fsn.okina", fsn_okina),
  AAAA("fsn.okina", fsn_okina_ipv6),
  CNAME("tigris", "prettysunflower.fly.storage.tigris.dev."),
  CNAME("s3.fedi", "fedi-prettysunflower-storage.t3.storage.dev."),
  okina("fedi"),
  mx("@"),
  mx("services"),
  dmarc,
  TXT(
    "@",
    "google-site-verification=MNk4A3w2twStNEcanuPQxO-zPWR6sLIDFrqzgKAWofc",
  ),
  TXT("@", "TAILSCALE-qWTfVmOp4VVdetEn5NJT"),
  TXT("_atproto", "did=did:plc:amgacgxmv3jwr5q7ckgf4j63"),
  TXT(
    "ps1._domainkey",
    "v=DKIM1; h=sha256; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCtpp/vr725dEAfEOeiR2ZZWZgmXAshysBLctDBTEOhiH8QcXX3Ec7SfVcTq5wKzmKh/Md1QrmivvPC//iX9AcJeGaAvkqskAHmbH5shP/Zv27CRHIRk0zqN15EPiBJPcCGkHPXTgPMjEAcEyCZTEKR5k9fLh2R2wP7JKRfXGFXYwIDAQAB",
  ),
  TXT(
    "ps1._domainkey.services",
    "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvNq0uP0gT1HM7W674qJnuwocGHjzZJpOvqlQJWstzqzlvPpR8Qb+0iVCC/vmWhlaeb//cHMOH1zTgB+x0EHkJGvcdHMVpClTp4o7Ch3zlUvWGfMl/M5Jq133/s8ZKXxwR75RszxdhcmflhcfFiawTJYAZF7fxVrJQm1kyeTxS2nQFsm2trgtVZ5X0BIGM5+Ij33xYq7o8XLySb8BGA1M4NeWv/7xJm22EZph18vyYH3fCdqRwPKh/FNX5p9mwh4roRLl7o433KH3cn+X1OFxN9wNhm2ss6uD6gIN9FosRs0FrQvTGOHHlV48Em+bgWzuhguKT1Eqba+Bqk40qTII6wIDAQAB",
  ),
  A("snikket", "116.202.12.37"),
  AAAA("snikket", "2a01:4f8:c013:ca31::1"),
  CNAME("groups.snikket", "snikket.prettysunflower.moe."),
  CNAME("share.snikket", "snikket.prettysunflower.moe."),
  CNAME("em903851", "return.smtp2go.net."),
  CNAME("s903851._domainkey", "dkim.smtp2go.net."),
  CNAME("cdn.fedi", "fedi-prettysunflower.b-cdn.net."),
);

D(
  "prettysunflower.moe!public",
  REG_NONE,
  DnsProvider(DSP_BUNNY),
  INCLUDE("prettysunflower.moe!common"),
  prettysunflower_moe_common_okina(DSP_BUNNY),
  okina("karakeep"),
  okina("git"),
  okina("papers"),
);

function generateHostsDNS() {
  var hostsRecords = [];
  for (var host in hosts) {
    hostsRecords.push(A(host + ".hosts", hosts[host]));
  }
  return hostsRecords;
}

D(
  "prettysunflower.moe!internal",
  REG_NONE,
  DnsProvider(DSP_BIND9),
  INCLUDE("prettysunflower.moe!common"),
  prettysunflower_moe_common_okina(DSP_BIND9),
  generateHostsDNS(),
  A("internal.okina", internal_okina),
  A("atuin", internal_okina),
  A("caldav", internal_okina),
  A("dns", internal_okina),
  A("iwanaga", "100.72.25.2"),
  A("firewall.iwanaga", "10.0.12.1"),
  A("git", internal_okina),
  A("kanban", internal_okina),
  A("karakeep", internal_okina),
  A("mail", "100.113.193.5"),
  A("runner.gitea", "100.67.114.102"),
  A("nareko", "100.76.0.86"),
  A("papers", internal_okina),
  A("plex", internal_okina),
  A("qbittorrent", internal_okina),
  A("shinmyoumaru", "100.105.17.105"),
  A("suika", "100.75.185.8"),
  A("yuyuko", "100.126.243.21"),
  A("certs", internal_okina),
  A("multiscrobbler", internal_okina),
  A("qui", internal_okina),
  A("jetkvm", "100.98.194.11"),
  A("remilia.sonarr", internal_okina),
  A("remilia.radarr", internal_okina),
  A("prowlarr", internal_okina),
  A("webarchives", internal_okina),
  A("healthchecks", internal_okina),
  A("kube-dns.kube-system.svc.sekibanki", "10.218.0.10"),
  A("kube-dns.kube-system.svc.yuiman", "10.220.0.10"),
  A("archives", "100.126.243.21"), // yuyuko
  A("bunny1", "91.200.176.1"),
  A("bunny2", "109.104.147.1"),
  NS("sekibanki", "kube-dns.kube-system.svc.sekibanki.prettysunflower.moe."),
  NS("yuiman", "kube-dns.kube-system.svc.yuiman.prettysunflower.moe."),
);
