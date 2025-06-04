
## Description

**Auth & User Management System**

**Core Concepts:** Authentication, Authorization, JWT, RBAC, Guards, Interceptors, Validation

**Bonus:** PostgreSQL, Swagger, Rate limiting, Email verification

**Modules:**
* Signup/Login with JWT and refresh token
* Role-based access (Admin, Moderator, User)
* OTP/email verification (simulated or real)
* Password reset flow

##

#### To Generate Dependency Graph:

`yarn madge dist/main.js --image graph.png`

Download GraphViz Software first(https://www.graphviz.org/download/)

```
src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│   ├── strategies/
│   │   ├── access-token.strategy.ts
│   │   ├── refresh-token.strategy.ts
│   ├── guards/
│   │   ├── jwt-auth.guard.ts
│   │   ├── roles.guard.ts
│   ├── dto/
│   │   ├── login.dto.ts
│   │   ├── register.dto.ts
│   │   ├── refresh-token.dto.ts
│   ├── interfaces/
│   │   └── auth.interface.ts
│   └── constants.ts
│
├── users/
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── users.module.ts
│   ├── dto/
│   │   ├── update-user.dto.ts
│   ├── entities/
│   │   └── user.entity.ts
│   ├── interfaces/
│   │   └── user.interface.ts
│   └── enums/
│       └── role.enum.ts
│
├── email/
│   ├── email.service.ts
│   ├── email.module.ts
│   ├── templates/
│   │   └── verification.template.ts
│   └── utils/
│       └── email.util.ts
│
├── common/
│   ├── decorators/
│   │   └── roles.decorator.ts
│   ├── interceptors/
│   │   └── logging.interceptor.ts
│   ├── guards/
│   │   └── throttle.guard.ts
│   ├── filters/
│   │   └── http-exception.filter.ts
│   └── pipes/
│       └── validation.pipe.ts
│
├── database/
│   ├── database.module.ts
│   ├── database.providers.ts
│   └── config/
│       └── postgres.config.ts
│
├── config/
│   ├── acess-token-jwt.config.ts
│   ├── rate-limit.config.ts
│   └── mail.config.ts
│
├── main.ts
├── app.module.ts
└── app.controller.ts
```

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.