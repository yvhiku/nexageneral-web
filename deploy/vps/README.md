# Corporate website VPS deployment

Static export only; no runtime secrets or database needed.

- Host: `nexa@72.60.133.228`
- Releases: `/opt/nexa/nexageneral-web/releases/<stamp>-<sha>`
- Current symlink: `/opt/nexa/nexageneral-web/current`
- Base activation: `/opt/nexa/nexageneral-web/deploy/activate.sh`
- SEO redirect activation: `/opt/nexa/nexageneral-web/deploy/activate-seo.sh` (installs `nexa-corporate-seo.conf`: apex site + `www` → `https://nexa.ma$request_uri` with ACME preserved)

## Deploy a new release

From your laptop (after `npm run build`):

```sh
REL="20260909-<sha>"
rsync -az --delete --chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r --checksum out/ nexa@72.60.133.228:/opt/nexa/nexageneral-web/releases/$REL/
ssh nexa@72.60.133.228 "ln -sfn releases/$REL /opt/nexa/nexageneral-web/current.tmp && mv -Tf /opt/nexa/nexageneral-web/current.tmp /opt/nexa/nexageneral-web/current"
```

`--chmod` keeps files world-readable so Nginx can serve `/brand/nexa.png` (Organization logo). Without it, macOS umask can leave files as `600` and Nginx returns 403.


```sh
ssh nexa@72.60.133.228
sudo bash /opt/nexa/nexageneral-web/deploy/activate.sh
```

## Activate www → apex SEO redirect

After TLS certs exist for both `nexa.ma` and `www.nexa.ma`:

```sh
sudo bash /opt/nexa/nexageneral-web/deploy/activate-seo.sh
```

The script backs up `/etc/nginx`, validates, reloads, and rolls back on failure. It does not touch Nexa Stays configs.

## DNS (Cloudflare)

Point apex and www at the VPS (or Cloudflare proxy origin `72.60.133.228`). Preserve MX, TXT, CAA.

## Rollback

Remove only `/etc/nginx/sites-enabled/nexa-corporate`, validate Nginx, reload. Restore DNS if needed. Keep release files. Do not alter Nexa Stays or firewall rules.
