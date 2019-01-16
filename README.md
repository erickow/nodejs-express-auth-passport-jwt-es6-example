# Node Js ( Express ) & ES6 REST API Example 

This Example for building REST APIs with ES6 and Express technology made with.

- ES6 support via [babel](https://babeljs.io)
- [Webpack](https://webpack.js.org/)
- [Eslint](https://eslint.org/) standart configuration
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)
- [Mongodb](https://www.mongodb.com/) and [Mongoose](https://www.npmjs.com/package/mongoose)
- other

Getting Started
---------------

```sh
# clone it
git clone https://github.com/erickow/nodejs-express-auth-passport-jwt-es6-example.git
cd express-es6-rest-api

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install
```

Run the project
---------------

```sh
# Before start, build project with webpack
npm run dev:build

# start the project
npm run dev
```

Api Endpoint
---------------

```sh
# user signup
localhost:3000/api/v1/users/signup

# user login
localhost:3000/api/v1/users/login

# protected example
localhost:3000/hello

# root helloword
localhost:3000
```
