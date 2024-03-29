# LaWallet Static

This repo contains static files accesed via https://static.lawallet.ar

- [x] Add vite framework
- [x] Add most common brands
- [ ] Generate `domains.json` automatically on build

## How to use

Just fetch `https://static.lawallet.ar/domains.json` and should return:

```json
{
  "getalby.com": "/img/domains/getalby.com.png",
  "lawallet.ar": "/img/domains/lawallet.ar.png",
...
}
```

You can dynmatically check if the domain is supported and get the image path to use it in your app.

### Request

Make the final request adding the prefix `https://static.lawallet.ar` and the path provided by the `domains.json`.

Example: https://static.lawallet.ar/img/domains/lawallet.ar.png
