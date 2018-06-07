# static-server

## Installation

```bash
npm i @gs-utils/static-server
```

## Running

### npx

```bash
npx static-server
```

### package.json

```json
{
  "scripts": "static-server"
}
```

## Options

### `--port`

Defaults to `8080`

```
npm i @gs-utils/static-server --port 9090
```

### `--serve`

Defaults to `src`. Can take multiple values.

```
npm i @gs-utils/static-server --serve public
npm i @gs-utils/static-server --serve public --serve assets
```
