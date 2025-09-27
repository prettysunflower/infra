#!/bin/sh

fd -I ".nocopy" -x sops -e --output {.}.sops {}