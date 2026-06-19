/// <reference path="../types-dnscontrol.d.ts" />

D(
  "kakigoori.dev!public",
  REG_NONE,
  DnsProvider(DSP_PORKBUN),
  okina("@"),
  okina("www"),
  CNAME("images", "kakigoori.fly.storage.tigris.dev."),
);

D(
  "kakigoori.dev!internal",
  REG_NONE,
  DnsProvider(DSP_BIND9),
  okina("@", DSP_BIND9),
  okina("www", DSP_BIND9),
  CNAME("images", "kakigoori.fly.storage.tigris.dev."),
);
