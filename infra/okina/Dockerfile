# syntax=docker/dockerfile:1-labs

FROM caddy:2.10.2-builder AS caddy-builder

RUN xcaddy build \
    --with github.com/caddy-dns/porkbun \
    --with github.com/caddy-dns/bunny \
    --with github.com/mholt/caddy-l4

FROM alpine:3.22

EXPOSE 80/tcp
EXPOSE 443/tcp
EXPOSE 443/udp
EXPOSE 25/tcp
EXPOSE 1688/tcp
EXPOSE 4922/tcp

COPY --from=caddy-builder /usr/bin/caddy /usr/bin/caddy

RUN <<EOF ash
	apk add fd sops

    mkdir -p /config/caddy /data/caddy /etc/caddy /usr/share/caddy
    touch /var/log/access.log

    setcap cap_net_bind_service=+ep /usr/bin/caddy
    chmod +x /usr/bin/caddy
EOF

COPY --exclude=**/*.nocopy caddy /etc/caddy

ENV XDG_CONFIG_HOME=/config
ENV XDG_DATA_HOME=/data

WORKDIR /root

COPY docker_start.sh .

ENTRYPOINT ["sh", "docker_start.sh"]
CMD ["run"]
