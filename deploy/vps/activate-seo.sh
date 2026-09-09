#!/usr/bin/env bash
set -euo pipefail
test "$(id -u)" -eq 0 || { echo 'Run with sudo.'; exit 1; }
target=/etc/nginx/sites-available/nexa-corporate
source=/opt/nexa/nexageneral-web/deploy/nexa-corporate-seo.conf
expected=5bad47d67df8f410a84055d4cba9dfed4dcf73d187f262279ddb9779b9756602
if cmp -s "$source" "$target"; then
    echo 'Corporate redirect configuration is already installed.'
    exit 0
fi
test "$(sha256sum "$target" | cut -d ' ' -f 1)" = "$expected" || {
    echo 'Live corporate configuration changed since inspection; stop for review.'
    exit 1
}
backup="/etc/nginx.backup-nexa-seo-$(date +%Y%m%d%H%M%S)"
cp -a /etc/nginx "$backup"
rollback() {
    cp -a "$backup/sites-available/nexa-corporate" "$target"
    nginx -t && systemctl reload nginx
    echo "Corporate configuration restored from $backup"
}
trap rollback ERR
install -d -m 755 /var/lib/letsencrypt/.well-known/acme-challenge
install -m 644 "$source" "$target"
nginx -t
systemctl reload nginx
for attempt in 1 2 3 4 5; do
    headers=$(curl --silent --show-error --max-time 5 --resolve www.nexa.ma:443:127.0.0.1 -I 'https://www.nexa.ma/fr/?source=redirect-check')
    if printf '%s' "$headers" | tr -d '\r' | grep -qi '^location: https://nexa.ma/fr/?source=redirect-check$'; then
        break
    fi
    sleep 1
done
printf '%s' "$headers" | tr -d '\r' | grep -qi '^location: https://nexa.ma/fr/?source=redirect-check$'
curl --fail --silent --show-error --max-time 10 --resolve nexa.ma:443:127.0.0.1 -o /dev/null https://nexa.ma/
trap - ERR
echo "Corporate redirect activated. Backup: $backup"
