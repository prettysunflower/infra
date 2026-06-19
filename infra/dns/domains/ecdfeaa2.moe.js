/// <reference path="../types-dnscontrol.d.ts" />

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
  CNAME("em903851", "return.smtp2go.net."),
  CNAME("s903851._domainkey", "dkim.smtp2go.net."),
);

D(
  "ecdfeaa2.moe!internal",
  REG_NONE,
  DnsProvider(DSP_BIND9),
  INCLUDE("ecdfeaa2.moe!public"),
  CNAME("doujins", "suika.prettysunflower.moe."),
);
