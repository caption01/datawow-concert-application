### Datawow assignment: Concert Reservation Application

owner: nutchapon hanouypornlert

### Project structure

```
root
├── app (frontend source code)
│
└── server (backend source code)
│
└── docker-compose-yaml (database & backend start up)
```

in application already seeding with

- 2 users

  - admin
  - john

- 2 concerts
  - bodyslam (1 seat)
  - illslick (200 seat)

---

### Project Architecture

#### Server

**overview**

this server was implement following clean architecture which setup project structure following

_FYI_ this project didn't implement soft delete yet so when you delete concert all reserve history that related to concert will be deleted.

```
src
├── application (presentation)
├── common (common module)
├── core (application structure (type, interface, abstract ))
├── framework (library, framework)
├── test (testing)
└── use-case (use case for controller)
```

main application was structure with abstract class in **core** module and apply any library or framework in **framework**, and mapping API handler by use-case

**tech stack**

- prisma
- nestJS

#### App

**overview**

this app was implement following nextJS layout structure which we can setup main application layout (sidebar and application dashboard) and then apply any layout from each page by **layout** in each layer.

we separate base component, hooks and service in each module and from each business domain (admin/user) we can independence implement each feature which take benefit from encapsulate all related source code with in own domain.

```
src
├── app
├── components
├── hooks
└── services
```

tech stack

- nextJS
- tailwind

---

### how to start application

#### start and run server

1. go to server directory

`cd ./server`

2. create .env from env-example in server directory

`cat env-example > .env`

3. install dependency

`yarn install`

4. back to root dir and start docker-compose

at root directory

`docker compose up --build`

4. check server is running

`curl http://localhost:3010/api/health`

5. run migration (for first time)

- 5.1 exec sh to server container `docker compose exec server sh`
- 5.2 exec prisma migrate `npx prisma migrate dev`
- 5.3 run seed `npx prisma db seed`

6. ready to go

7. in case want to reset every thing in database (optional)

- 7.1 exec sh to server container `docker compose exec server sh`
- 7.2 exec prisma migrate `npx prisma migrate reset`

#### start and run app

1. go to app directory

`cd ./app`

2. create .env from env-example in app directory

`cat env-example > .env.local`

3. install dependency

`yarn install`

4. run application

`yarn dev`

5. ready to go (open http://localhost:3000)

---

### how to run test in server

1. go to server directory

`cd ./server`

2. run jest tests

`yarn test`

---

### Bonus Task

#### 1.how to optimize your website in case that this website contains intensive data and when more people access, the lower speed you get?

1. in application layer

   - avoid application rendering massive data which pagination system.
   - avoid drilling props by co-located state.
   - try to add more hook dependency when it need.

2. on networking layer

   - using cdn cache to reduce some networking request in static content.

### 2.how to handle when many users want to reserve the ticket at the same time?

1. i would like to add optimistic locking strategy into reservation flow to prevent in concurrency booking.

### Live Demo (GIF)

### Small Screen

<img width="300" height="400" alt="sm-screen" src="./sm.gif" />

### Medium - Large Screen

<img width="800" height="500" alt="sm-screen" src="./tablet-desktop.gif" />
