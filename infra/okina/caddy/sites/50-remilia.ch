remilia.ch, www.remilia.ch {
	import porkbun

	handle / {
		redir https://prettysunflower.moe
	}

	reverse_proxy 100.106.176.41
}

auth.remilia.ch {
	import porkbun

	reverse_proxy pocketid.default.svc.yuiman.prettysunflower.moe
}

data.remilia.ch {
	import porkbun

	redir https://data.prettysunflower.moe
}

papers.remilia.ch {
	import porkbun

	redir https://papers.prettysunflower.moe{uri} permanent
}

home.remilia.ch {
	import porkbun

	import tailscale {
		reverse_proxy 100.121.126.124:8123
	}
}