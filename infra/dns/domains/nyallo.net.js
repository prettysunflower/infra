/// <reference path="../types-dnscontrol.d.ts" />

D(
  "nyallo.net!common",
  REG_NONE,
  MX("@", 10, "in1-smtp.messagingengine.com."),
  MX("@", 20, "in2-smtp.messagingengine.com."),
  CNAME("fm1._domainkey", "fm1.nyallo.net.dkim.fmhosted.com."),
  CNAME("fm2._domainkey", "fm2.nyallo.net.dkim.fmhosted.com."),
  CNAME("fm3._domainkey", "fm3.nyallo.net.dkim.fmhosted.com."),
  SPF_BUILDER({
    parts: ["v=spf1", "include:spf.messagingengine.com", "?all"],
  }),
  dmarc,
  okina("@"),
  okina("www"),
  okina("dolibarr"),
  okina("redmine"),
  okina("redmine.kikimungo"),
  okina("auth"),
  A("staging.kikimungo", "149.56.130.91"),
  AAAA("staging.kikimungo", "2607:5300:205:200::9b02"),
  A("*.staging.kikimungo", "149.56.130.91"),
  AAAA("*.staging.kikimungo", "2607:5300:205:200::9b02"),
  CNAME("em903851", "return.smtp2go.net."),
  CNAME("s903851._domainkey", "dkim.smtp2go.net."),
  TXT(
    "@",
    "google-site-verification=LsHs_iV-KqKKe3tViAr_8Xlw0eg8i7T7RPvH2OyCAGU",
  ),
);

D(
  "nyallo.net!public",
  REG_NONE,
  DnsProvider(DSP_PORKBUN),
  INCLUDE("nyallo.net!common"),
);

D(
  "nyallo.net!internal",
  REG_NONE,
  DnsProvider(DSP_BIND9),
  INCLUDE("nyallo.net!common"),
  A("mail", "100.113.193.5"),
);
