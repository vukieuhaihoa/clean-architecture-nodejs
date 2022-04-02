# NodeJS Backend Initialize

> This repo to learn how to set up Backend Nodejs with Typescript, Eslint, Prettier and Jest

In this repo, you will learn:

- Initialize project with typescript
- Add Eslint for Backend
- Add Prettier for format code
- Testing with Jest
- And ✨Magic ✨, i don't know 🤣

## Tech

- [Nodejs] - Javascript runtime environment
- [Vscode IDE] - Awesome editor for coding
- [Typescript] - JavaScript with syntax for types
- [Eslint] - Checking syntax and more hahaha
- [Prettier] - Format code
- [Jest] - For testing

## Installation

Note: This project run on Node version: v16.13.2

1. Create new repository on Github

2. Make local directory and connect with git repo

   ```sh
   cd Desktop
   mkdir set-up
   cd set-up
   code .
   ```

   After vscode opened, open terminal on vscode

   ```sh
   git init
   git remote add origin git_link_repo
   git pull origin main
   git checkout -b ft/init
   ```

   Add git ignore file

   ```sh
   touch .gitignore
   ```

3. Init project, Let's start .... 🥰

   ```sh
   yarn init
   ```

   Add node version manager to make sure any member on team working with the same node version

   ```sh
   node -v > .nvmrc
   ```

   Add dev dependencies packages

   ```sh
   yarn add -D typescript ts-node @types/node
   ```

   Init typescript configs

   ```
   npx tsc --init
   ```

   3.1 Add Eslint

   Install Eslint extension on vscode
   Init eslint and choose custom appropriate for your project (I use airbnb format :))

   ```sh
   npx eslint --init
   ```

   Create eslint ignore for folder don't need check syntax such as node_modules

   ```sh
   touch .eslintignore
   ```

   3.2 Add Prettier

   Install Prettier extension, After that

   ```sh
   yarn add -D prettier
   touch .prettierrc
   ```

   3.3 Eslint config

   ```sh
   yarn add -D eslint-plugin-prettier eslint-config-prettier eslint-plugin-import

   yarn add -D eslint-import-resolver-typescript tsconfig-paths
   ```

   3.4 Custom file tsconfig.json

   You must have create folder src and make file index.ts with some code ^^

   3.5 Write scripts into package.json file to dev prod build

   3.6 Add nodemon

   ```sh
   yarn add -D nodemon
   touch nodemon.json
   ```

   3.7 Loading environment with dotenv-safe

   In local it will load config from file .env
   => file .env.example it for fun :))

   ```sh
   yarn add dotenv-safe
   touch .env => private at local
   touch .env.example => to push git for example
   ```

   3.8 Testing with jest

   ```sh
   yarn add -D jest ts-jest @types/jest
   npx ts-jest config:init
   ```

   3.9 Add Husky and lint-staged

   Husky is package help me catch any git action => Actually my purpose using husky to check pre commit

   Lint-staged => Only run eslint or test for file which have change, file no change => not run => save time :))))

   ```sh
   npx husky-init && yarn
   ```

## License

MIT
