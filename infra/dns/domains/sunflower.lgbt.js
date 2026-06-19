/// <reference path="../types-dnscontrol.d.ts" />

function sunflower_lgbt_common_okina(dsp) {
  return [
    okina("@", dsp),
    okina("www", dsp),
    okina("git", dsp),
    okina("kms", dsp),
    okina("pad", dsp),
    okina("photos", dsp),
    okina("schedule", dsp),
    okina("data", dsp),
    okina("jackett", dsp),
    okina("privatebin", dsp),
    okina("masto-fe", dsp),
    okina("music", dsp),
    okina("public.registry.container", dsp),
    okina("cimmondayhelper", dsp),
    okina("pds", dsp),
    okina("*.pds", dsp),
    okina("login", dsp),
  ];
}

D(
  "sunflower.lgbt!common",
  REG_NONE,
  CNAME("tigris", "prettysunflower.fly.storage.tigris.dev."),
  CNAME("em903851", "return.smtp2go.net."),
  CNAME("s903851._domainkey", "dkim.smtp2go.net."),
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
  sunflower_lgbt_common_okina(DSP_BUNNY),
);

D(
  "sunflower.lgbt!internal",
  REG_NONE,
  DnsProvider(DSP_BIND9),
  INCLUDE("sunflower.lgbt!common"),
  sunflower_lgbt_common_okina(DSP_BIND9),
  A("currency", internal_okina),
  A("mirror.container", internal_okina),
  A("admin.status", internal_okina),
  A("flaresolverr", internal_okina),
  A("dns", "100.74.71.91"),
  A("testmtls", internal_okina),
  A("private.registry.container", internal_okina),
  A("mediamanager", internal_okina),
  A("changedetection", internal_okina),
  A("grafana", internal_okina),
);
