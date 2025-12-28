remilia.ch, www.remilia.ch {
	import bunny

	handle / {
		redir https://prettysunflower.moe
	}

	reverse_proxy 100.106.176.41
}

auth.remilia.ch {
	import bunny

	reverse_proxy pocketid.default.svc.yuiman.prettysunflower.moe
}

data.remilia.ch {
	import bunny

	redir https://data.prettysunflower.moe
}

papers.remilia.ch {
	import bunny

	redir https://papers.prettysunflower.moe{uri} permanent
}

home.remilia.ch {
	import bunny

	import tailscale {
		reverse_proxy 100.121.126.124:8123
	}
}
