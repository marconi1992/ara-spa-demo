# Live Reloading and Lazy Loading for Micro-Frontends using Ara Framework

## Nuxt application

Install dependencies for Nuxt application `nuxt-spa`

```shell
yarn install
```

Run Nuxt application on http://localhost:3000.

```shell
PORT=3000 yarn dev
```

## Foo Nova (Micro-frontend)

Install dependencies for Nova service `foo-nova`.

```shell
yarn install
```

Run Nova service on http://localhost:8080

```shell
yarn dev --port 8080
```

## Bar Nova (Micro-frontend)

Install dependencies for Nova service `bar-nova`.

```shell
yarn install
```

Run Nova service on http://localhost:8081

```shell
yarn dev --port 8081
```