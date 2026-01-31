// @ts-check
/// <reference path="types-dnscontrol.d.ts" />

var REG_NONE = NewRegistrar("none");
var DSP_BUNNY = NewDnsProvider("bunny");
var DSP_BIND9 = NewDnsProvider("bind9");
var DSP_PORKBUN = NewDnsProvider("porkbun");

var fsn_okina = "23.88.71.121";
var fsn_okina_ipv6 = "2a01:4f8:272:ea00:be24:11ff:fe33:fa90";
var internal_okina = "100.108.98.123";
var dmarc = DMARC_BUILDER({
  policy: "reject",
  ruf: ["mailto:postmaster@prettysunflower.moe"],
  rua: ["mailto:postmaster@prettysunflower.moe"],
  failureOptions: {
    SPF: false,
    DKIM: false,
  },
  alignmentSPF: "strict",
  alignmentDKIM: "strict",
  percent: 100,
  failureFormat: "afrf",
  subdomainPolicy: "reject",
});

function mx(subdomain) {
  return [
    MX(subdomain, 10, "okina.prettysunflower.moe."),
    SPF_BUILDER({
      label: subdomain,
      parts: [
        "v=spf1",
        "ip4:199.58.80.0/22", // Koumbit
        "?all",
      ],
    }),
  ];
}

function okina(subdomain) {
  return [A(subdomain, fsn_okina), AAAA(subdomain, fsn_okina_ipv6)];
}

D(
  "prettysunflower.moe!common",
  REG_NONE,
  okina("@"),
  okina("www"),
  A("fsn.okina", fsn_okina),
  AAAA("fsn.okina", fsn_okina_ipv6),
  okina("okina"),
  okina("qr"),
  okina("smtp"),
  okina("kms"),
  CNAME("tigris", "prettysunflower.fly.storage.tigris.dev."),
  okina("data"),
  okina("wiki"),
  okina("invidious"),
  okina("gist"),
  okina("files"),
  okina("fedi"),
  okina("deneb.sonarr"),
  okina("deneb.radarr"),
  okina("books"),
  CNAME("s3.fedi", "fedi-prettysunflower-storage.t3.storage.dev."),
  mx("@"),
  mx("services"),
  dmarc,
  TXT(
    "@",
    "google-site-verification=MNk4A3w2twStNEcanuPQxO-zPWR6sLIDFrqzgKAWofc",
  ),
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
);

D(
  "prettysunflower.moe!public",
  REG_NONE,
  DnsProvider(DSP_BUNNY),
  INCLUDE("prettysunflower.moe!common"),
  okina("karakeep"),
  okina("git"),
  okina("papers"),
  okina("passwords"),
);

D(
  "prettysunflower.moe!internal",
  REG_NONE,
  DnsProvider(DSP_BIND9),
  INCLUDE("prettysunflower.moe!common"),
  A("internal.okina", internal_okina),
  A("actual", internal_okina),
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
  A("passwords", internal_okina),
  A("qui", internal_okina),
  A("jetkvm", "100.98.194.11"),
  A("remilia.sonarr", internal_okina),
  A("remilia.radarr", internal_okina),
  A("prowlarr", internal_okina),
  A("kube-dns.kube-system.svc.sekibanki", "10.218.0.10"),
  A("kube-dns.kube-system.svc.yuiman", "10.220.0.10"),
  A("bunny1", "91.200.176.1"),
  A("bunny2", "109.104.147.1"),
  NS("sekibanki", "kube-dns.kube-system.svc.sekibanki.prettysunflower.moe."),
  NS("yuiman", "kube-dns.kube-system.svc.yuiman.prettysunflower.moe."),
);

D(
  "deneb.local",
  REG_NONE,
  DnsProvider(DSP_BIND9),
  A("qbittorrent", "10.0.0.228"),
  A("sonarr", "10.0.0.228"),
);

D(
  "ecdfeaa2.moe!public",
  REG_NONE,
  DnsProvider(DSP_BUNNY),
  mx("@"),
  dmarc,
  TXT(
    "ps1._domainkey",
    "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvFesFlwpavJmTtWLEOi1jgGdvLo7nuq58eEi0h2aKqr/G3RK7RrKzxoQGV0COm+uvJydcgV/An56/Nf7JaECGNQWKk+Bo8ootIYJc+h3jOCbBNM1VxrqF9dCMBUiFvWN4pz22hdtzqCtZGaBhIDT/ubVwvdWtobCHsPER1APMNwIDAQAB",
  ),
);

D(
  "ecdfeaa2.moe!internal",
  REG_NONE,
  DnsProvider(DSP_BIND9),
  INCLUDE("ecdfeaa2.moe!public"),
  CNAME("doujins", "suika.prettysunflower.moe."),
);

D(
  "remilia.ch!public",
  REG_NONE,
  DnsProvider(DSP_BUNNY),
  okina("@"),
  okina("www"),
  okina("auth"),
  okina("smtp"),
  okina("git"),
  okina("data"),
  okina("kms"),
  mx("@"),
  dmarc,
  CNAME("ip", "okina.prettysunflower.moe."),
  TXT(
    "@",
    "google-site-verification=M9aJmH5tYmiyQhfsRrdNPHKRE0AeHd82SfgNI23YaCM",
  ),
  TXT(
    "ps1._domainkey",
    "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+etqYjgJM5cwDVBhbhAUfglDY/1v6NNuHOxXiAZKFhhnnV6YyfvgAJ6XxSgJnEkZnpiYi2Y3UUo+hhPYOkuJJSuztONr8Mn+7BK+G73R8taC+X1e55DmN9EJqB8iGqTZzRfIHSGnoS6INtBdletrhh8Z2SC+4h70ginD5K1MH5QIDAQAB",
  ),
  TXT("lucifevesdaubrac.fr._report._dmarc", "v=DMARC1"),
);

D(
  "remilia.ch!internal",
  REG_NONE,
  DnsProvider(DSP_BIND9),
  INCLUDE("remilia.ch!public"),
  A("actual", internal_okina),
  A("certs", internal_okina),
  A("home", internal_okina),
  A("llm", internal_okina),
  A("papers", internal_okina),
  A("shinmyoumaru", "100.105.17.105"),
  A("yuyuko", "100.126.243.21"),
  A("ns1", "91.200.176.1"),
  A("ns2", "109.104.147.1"),
);

D(
  "sunflower.lgbt!common",
  REG_NONE,
  okina("@"),
  okina("www"),
  okina("git"),
  okina("kms"),
  okina("pad"),
  okina("photos"),
  okina("schedule"),
  okina("data"),
  okina("jackett"),
  okina("privatebin"),
  okina("masto-fe"),
  okina("music"),
  okina("public.registry.container"),
  CNAME("tigris", "prettysunflower.fly.storage.tigris.dev."),
  TXT("_discord", "dh=86bfb23fa64ce4d8e26d4b165e43958a744105f1"),
  TXT(
    "@",
    "google-site-verification=6bLZ_pK198oF6hFgaaNqULP26r4dH2rvFxePhqIPD8Q",
  ),
  TXT(
    "ps1._domainkey",
    "v=DKIM1; h=sha256; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA50E/cNEHusN8UjwWQ2b4MzlQCXLdOfYT9CDrv0ZZOQODEfK0tP93pQ1cF5MaaltRfM70Y3yEnE06O+CvKaXRtpP32WoW/H72FZidfHU/GymW75WZ0n+yW2jc0KUEeBx8c7tkMMdrh5VQ8vL4qOTtmPgyrU+HRkR9xnmFEwqUXnGBwAL8IhC899H0xE0S2dYQm1U9tZ1Mzgl7DEfWfw7z5p5FXFzfbyJEYHEJX+DHJGfXq85n0GIZwd+zIju1iMgV66yyzqzFSh1mNjKtRRcc+avxn5yAqhpeiJ9Q924luOaGaPxGL2PnZ5prt6HDJFPUcLHVQmhXoaQMpL7i5lNOuQIDAQAB",
  ),
  mx("@"),
  dmarc,
);

D(
  "sunflower.lgbt!public",
  REG_NONE,
  DnsProvider(DSP_BUNNY),
  INCLUDE("sunflower.lgbt!common"),
  okina("login"),
);

D(
  "sunflower.lgbt!internal",
  REG_NONE,
  DnsProvider(DSP_BIND9),
  INCLUDE("sunflower.lgbt!common"),
  A("currency", internal_okina),
  A("n8n", internal_okina),
  A("mirror.container", internal_okina),
  A("admin.status", internal_okina),
  A("flaresolverr", internal_okina),
  A("dns", "100.74.71.91"),
  A("testmtls", internal_okina),
  A("private.registry.container", "100.108.98.123"),
  A("login", internal_okina),
  A("mediamanager", internal_okina),
);

D(
  "kakigoori.dev",
  REG_NONE,
  DnsProvider(DSP_PORKBUN),
  okina("@"),
  okina("www"),
  CNAME("images", "kakigoori.fly.storage.tigris.dev."),
);

D("download-ram.zip", REG_NONE, DnsProvider(DSP_PORKBUN), okina("restic"));
