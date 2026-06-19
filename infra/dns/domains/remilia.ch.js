/// <reference path="../types-dnscontrol.d.ts" />

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
  okina("wiki"),
  CNAME("em903851", "return.smtp2go.net."),
  CNAME("s903851._domainkey", "dkim.smtp2go.net."),
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
