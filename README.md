<h1 align="center">Vu-dooit</h1>
<p align="center">An open source and cross-platform Task Manager, completely offline.

![](README/light.png)

![](README/dark.png)

## Features

- No tracking or anything similar.
- All your data is saved locally, through Indexeddb.
- A nice (?) dark mode
- Create multiple projects, organize your tasks.

## Instalation

### Desktop

Clone repository, install dependencies, npm run build:electron (or yarn equivalent)

This should build it for your platform. If you use linux, you can download the latest release [here](#)

---

## Contributing

### Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
# to open on browser:
quasar dev
# or with Electron:
quasar dev -m electron
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
