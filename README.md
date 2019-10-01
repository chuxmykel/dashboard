![Banka Logo](https://i.ibb.co/bNckPNw/Screenshot-2019-08-27-at-00-18-00.png)
# dashboard
> A Simple dashboard built with React.js

* [Technologies](#technologies)
* [Features](#features)
* [Getting Started](#getting-started)
  * [Installation](#installing)
  * [Developing](#developing)
  * [Licensing](#licensing)

### UI
The UI is hosted at [https://react-banka.herokuapp.com/](https://react-banka.herokuapp.com/)

## Technologies
---
- [NodeJs](https://https://nodejs.org) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [ReactJs](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Express](https://expressjs.com) - Fast, unopinionated, minimalist web framework for Node.js

### Supporting Packages
#### Linter
- [ESlint](https://eslint.org) - Linter Tool
#### Compiler
- [Babel](https://babeljs.io) - Compiler for Next Generation Javascript

## Getting Started
---
### Installing

To run this application, you need to have Node.js, and git(to clone the repo) installed. Then follow the instructions to get
it up and running

- clone the repo using 
```shell
~> git clone https://github.com/chuxmykel/dashboard.git
```
- run ``` npm install --prod``` to install dependencies
- create a .env file from the .env.example file and fill in the necessary environment variables
- run ``` npm run build ``` to build the project and then run ``` npm start ``` to start the server
- now access the server on the localhost port 3000 (or whatever port you specified in your `.env` file) i.e ``` localhost:3000 or 127.0.0.1:3000 ```

Now the server will go live and listen for requests

## Developing

To develop the app further, a few handy tools have been put in place such as nodemon and some other dev dependencies.
Access them by starting the server using ```npm run dev```. But before using the command, make sure to follow the steps below

```shell
git clone https://github.com/chuxmykel/dashboard.git
cd dashboard/
npm install
npm run dev
```

### Building

The app is written in ES6+ and wired to run ES5 transpiled code in production. To transpile any changes to ES5 run the script shown below

```shell
npm run build
```

Babel then transpiles your ES6+ files to ES5 for environment compatibility

## Licensing

Copyright &copy; 2019, Ngwobia, Chukwudi M.
The code in this project is licensed under [ISC LICENSE](https://github.com/chuxmykel/dashboard/blob/develop/LICENSE)

