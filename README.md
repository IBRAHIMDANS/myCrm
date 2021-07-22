# CRM APP
    Basic App for messaging 

## Authors & Contributors

| Name | Role | GITHUB|
|------|------|------|
| Ibrahima Dansoko | **Front/Back** | @ibrahimdans|

# Architectures

```
Mono Repo with Lerna 
api => NestJS [TypeScript] with Postgres  [BDD]
app => Anuglar with Angular material  [UI]
```
# Start Projet & Script
```shell script
$ yarn 
$ cp packages/api/.env.sample packages/api/.env
$ yarn bootstrap
$ echo launch docker for bdd 
$ cd ../api/docker ; docker-compose up 
$ yarn dev-api
$ yarn dev-app
```
### Links

# SCREENSHOT
<p align="center">
  <img alt="" src="./assets/demo.gif" />
</p>
