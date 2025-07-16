#!/bin/sh


fd -I "secrets.yaml" -x sops -e --encrypted-regex '^(data|stringData)$' --output {.}.sops.yaml {}
fd -I "local_settings.py" -x sops -e --output {.}.sops.py {}