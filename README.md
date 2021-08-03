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
app => Nest.JS with Redux for store 🔥  [UI]
```
# Start Projet & Script
```shell script
⚠️ Create BDD Postgres with name => "CrmApp" or launch docker
$ yarn 
$ cp packages/api/.env.sample packages/api/.env
$ yarn bootstrap
$ echo launch docker for bdd 
$ cd ../api/docker ; docker-compose up 
$ yarn dev-api
$ yarn dev-app
```
### Links
1) Login
![img.png](shared/screen/img.png)
-- [Version Mobile]
![img_2.png](shared/screen/img_2.png)
2) Register
![img_1.png](shared/screen/img_1.png)
-- [Version Mobile]
![img_8.png](shared/screen/img_8.png)
3) Home Message
![img_4.png](shared/screen/img_4.png)
-- [Version Mobile]
![img_3.png](shared/screen/img_3.png)
4) Switch User
![img_5.png](shared/screen/img_5.png)
-- [Version Mobile]
![img_6.png](shared/screen/img_6.png)
5) Go To Message (only mobile)
![img_7.png](shared/screen/img_7.png)
6) Suprimer Message
![img.png](shared/screen/img_9.png)
7) Modifier Message
![img_1.png](shared/screen/img_10.png)

# DEMO
<p>
  <img alt="" src="./shared/demo.gif" />
</p>
