/// <reference path="types-dnscontrol.d.ts" />

var REG_NONE = NewRegistrar("none");
var DSP_BUNNY = NewDnsProvider("bunny");
var DSP_BIND9 = NewDnsProvider("bind9");
var DSP_PORKBUN = NewDnsProvider("porkbun");

var hosts = require("./hosts.json");
var fsn_okina = "23.88.71.121";
var fsn_okina_ipv6 = "2a01:4f8:272:ea00:be24:11ff:fe33:fa90";
var internal_okina = "100.99.9.97";
var internal_okina_ipv6 = "fd7a:115c:a1e0::6c36:961";
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

function okina(subdomain, dsp) {
  if (dsp == DSP_BIND9) {
    entries = [
      A(subdomain, internal_okina),
      AAAA(subdomain, internal_okina_ipv6),
      HTTPS(
        subdomain,
        1,
        ".",
        [
          "alpn=h3,h2",
          "ipv4hint=" + internal_okina,
          "ipv6hint=" + internal_okina_ipv6,
        ].join(" "),
      ),
    ];
  } else {
    entries = [
      A(subdomain, fsn_okina),
      AAAA(subdomain, fsn_okina_ipv6),
      HTTPS(
        subdomain,
        1,
        ".",
        [
          "alpn=h3,h2",
          "ipv4hint=" + fsn_okina,
          "ipv6hint=" + fsn_okina_ipv6,
        ].join(" "),
      ),
    ];
  }

  return entries;
}

require_glob("./domains/");
