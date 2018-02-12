# TicketCrypt 


## Dev-Setup

1. Install Truffle globally.

    ```
    npm install -g truffle
    ```

2. Install dependencies
    
    ```
    npm install
    ```

3. Run the development console.
	
	```
    truffle develop
    ```

4. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    
    ```
    compile
    migrate
    ```

5. Run the webpack server for front-end hot reloading (outside the development console). Smart contract changes must be manually recompiled and migrated.
    
    ```
    // Serves the front-end on http://localhost:3000
    npm run start
    ```

6. To build the application for production, use the build command. A production build will be in the build_webpack folder.
    
    ```
    npm run build
    ```

## MetaMask

1. Get Test Accounts
[ganache-cli documentation](https://github.com/trufflesuite/ganache-cli)

```
npm install -g ganache-cli
ganache-cli
```

2. Import a test account into Metamask

3. Set MetaMask to Private Network

```
new RPC network: localhost:127.0.0.1:8545
```

4. Uncomment code from truffle.js/truffle.config.js

Windows use ```truffle.config.js```
Mac/Linux use ```truffle.js```

```
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  //use with metamask
   networks: {
     development: {
       host: "localhost",
       port: 8545,
       network_id: "*" // Match any network id
     }
   }
};
```
5. Change web3 network

```
cd TicketCrypt/src/utils/getWeb3.js

\\change url from http://127.0.0.1:9545 to http://127.0.0.1:8545

var provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545')
```

## Troubleshooting

Contract not deployed to network? - turn off metamask

Why am I getting a `gyp: No Xcode or CLT version detected!` error after running npm install? 
- See this [post](https://stackoverflow.com/questions/27665426/trying-to-install-bcrypt-into-node-project-node-set-up-issues)

Working on a branch and missing npm dependencies?
Run  `npm install <insert-library>`
