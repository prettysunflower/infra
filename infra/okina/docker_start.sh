if [[ "$(printf '%s' "$SOPS_AGE_KEY")" == '' ]]; then
  echo "No age private key was provided, aborting"
  exit 1
fi

cd /etc/caddy

fd -I ".sops" -x sops -d --output {.} {}
fd -I ".sops" -x rm {}

if [[ $1 == "validate" ]]; then
	caddy validate --config /etc/caddy/Caddyfile
elif [[ $1 == "run" ]]; then
	caddy run --config /etc/caddy/Caddyfile
fi
