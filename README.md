# CypressPoC

Cypress repository with Typescript for API and Frontend testing

## Install Steps

```bash 
npm install
```

You need to create an `.env` file with the credential user information, the idea is not to have sensitive data declared in the code.

NOTE: To make the respective executions in Github Actions, Github Secrets were created with the respective credentials

```bash 
TEST_USER="{ ...data }"
TEST_PASS="{ ...data }"
```

## Scripts Commands

`npm run format` code formatter 

`npm run cypress:open` open cypress console debbuger 

`npm run cypress:all` execute all cypress tests

`npm run cypress:api` execute only api tests

`npm run cypress:fe` execute only frontend tests


## Dependencies 

 - Mochawesome (after run the cypress tests execution you can find the cypress report into the cypress/report folder)
 - Prettier: code formatter 
 - Github Actions: for continuos integration test executions (on the Actions Tab, you can see the execution)

<img width="1658" alt="image" src="https://github.com/marcoolsen/CypressPoC/assets/46571669/ccfbc9a3-807c-4666-8d34-67bc3cd87b38">
