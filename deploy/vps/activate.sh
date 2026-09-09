#!/usr/bin/env bash
set -euo pipefail
test "$(id -u)" -eq 0 || { echo 'Run this script with sudo.'; exit 1; }
base=/opt/nexa/nexageneral-web
available=/etc/nginx/sites-available/nexa-corporate
enabled=/etc/nginx/sites-enabled/nexa-corporate
test -s "$base/current/index.html"
test ! -e "$available" && test ! -L "$enabled" || {
    echo 'Nexa corporate configuration already exists. Inspect it before updating.'
    exit 1
}
install -m 644 "$base/deploy/nexa-corporate.conf" "$available"
ln -s "$available" "$enabled"
if ! nginx -t; then
    rm "$enabled" "$available"
    echo 'Configuration validation failed; new configuration removed.'
    exit 1
fi
if ! systemctl reload nginx; then
    rm "$enabled" "$available"
    nginx -t && systemctl reload nginx
    exit 1
fi
curl --fail --silent --output /dev/null -H 'Host: nexa.ma' http://127.0.0.1/
echo 'Corporate website activated on HTTP. Configure DNS, then issue HTTPS certificate.'
