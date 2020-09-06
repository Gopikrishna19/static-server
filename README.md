# static-server

## Installation

```bash
npm i @gs-utils/static-server
```

## Running

### npx

```bash
npx static-server [-p @gs-utils/static-server] [--port <number|8080>] [--livereload <boolean|true>] [--serve <folderPath|src>]
```

### package.json

```json
{
  "scripts": {
    "start": "static-server"
  }
}
```

## Options

### `--port`

Defaults to `8080`

```
npx static-server --port 9090
```

### `--serve`

Defaults to `src`. Can take multiple values.

```bash
npx static-server --serve public
npx static-server --serve public --serve assets
```

### `--livereload`

Defaults to `true`. Install [livereload extension](http://livereload.com/extensions/) to enable it. To disable:

```bash
npx static-server --livereload false
```
