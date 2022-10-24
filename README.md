# DeployContract_inQtum
This is Exercise 18 from MI4 in Kingsland Universities Blockchain Developer Program

# Goals 
In this exercise, you will deploy a simple Smart Contract in Qtum’s Regtest mode.
To deploy a contract, you will need the contract's *bytecode* and *ABI*, generated using *solc*.
Finally, you’ll invoke its methods in JavaScript using *qweb3.js*.

# Prerequisites
Throughout the project, we will use:
• Solidity v0.6.4 (solc)
• Qtum v0.19.0.1 (https://github.com/qtumproject/qtum/releases/tag/mainnet-ignition-v0.19.0)
• QWeb3 v1.2.2
• NodeJS v13.5.0
• NPM v6.13.4

# Commands

# 1. Generate Bytecode and ABI
1. Create a folder on your preferred location. From this point onwards, we will refer to this as your workspace.
2. Implement a simple storage contract:

Install solc if you don’t have it, yet. Don’t forget to run the command as an administrator.

    npm install -g solc@0.6.4
    
Compile the contract. This will generate the bytecode and ABI files on your workspace.

    solcjs SimpleStorage.sol --bin --abi
    
# 2. Run Qtum regtest
- 1. Download Qtum 0.19.0.1 from this github repository:
https://github.com/qtumproject/qtum/releases/tag/mainnet-ignition-v0.19.0
It’s more convenient to download the zip file for your platform.

- 2. Extract the archive on your workspace and open up a new terminal on that location.
a. For MacOS users, run the following command to extract the archive:

    tar xvzf qtum-0.19.0.1-osx64.tar.gz

- 3. Go to the bin folder and run the qtum daemon on regtest mode with username, password and port.
If you want, you can set your data directory to point at your desired location.
Remember not to close this terminal for the rest of the activity.

Windows OS -
       qtumd.exe --regtest --datadir=. --rpcuser=username --rpcpassword=password --rpcport=13889
       
Mac OS -
      ./qtumd --regtest --datadir=. --rpcuser=username --rpcpassword=password --rpcport=13889

- 4. The Qtum regtest mode provides the option to generate blocks in order to speed up the process using PoW
during testing. To generate an account, launch a new terminal on the same location and interact with the
daemon using qtum-cli with the following command:

Windows OS- 
    qtum-cli.exe --regtest --rpcuser=username --rpcpassword=password --rpcport=13889 getnewaddress
    
Mac OS
    
    ./qtum-cli --regtest --rpcuser=username --rpcpassword=password --rpcport=13889 getnewaddress
    
5. Get test QTUMs. The command is: generatetoaddress 600 your_generated_address
This will mine 600 blocks and the block reward will go to the specified address.
Note: This command may take some time as qtum-core mines new blocks.
If you examine the qtumd.exe terminal, you’ll see the mining process happening.

Windows OS -
         
         qtum-cli.exe --regtest --rpcuser=username --rpcpassword=password --rpcport=13889

generatetoaddress 600 qN1ipWSFoEhKbigPUcirHxpTbehkpWiiM6
  
  Mac OS -
  
    ./qtum-cli --regtest --rpcuser=username --rpcpassword=password --rpcport=13889
    
generatetoaddress 600 qN1ipWSFoEhKbigPUcirHxpTbehkpWiiM6

6. To check the wallet's address and current balance, type getwalletinfo
qtum-cli.exe --regtest --rpcuser=username --rpcpassword=password --rpcport=13889 getwalletinfo
./qtum-cli --regtest

3. Deploy Contract
1. To deploy the contract, call createcontract with the bytecode found in your workspace folder named:
SimpleStorage_sol_SimpleStorage.bin
Windows OS -
        qtum-cli.exe --regtest --rpcuser=username --rpcpassword=password --rpcport=13889

createcontract 6080604052348015610011576000600...
Mac OS -
        ./qtum-cli --regtest --rpcuser=username --rpcpassword=password --rpcport=13889

createcontract 6080604052348015610011576000600...

The result of this command is a JSON, storing the transaction hash, sender address, hash160 and the
address of the contract

At this point, save the following as we will use them later:
• tx_id - The transaction ID
• sender - The contract creator
• address - The contract address
2. Mine one block:
Windows OS -

        qtum-cli.exe --regtest --rpcuser=username --rpcpassword=password --rpcport=13889

generatetoaddress 1 qN1ipWSFoEhKbigPUcirHxpTbehkpWiiM6

Mac OS -

    qtum-cli.exe --regtest --rpcuser=username --rpcpassword=password --rpcport=13889

generatetoaddress 1 qN1ipWSFoEhKbigPUcirHxpTbehkpWiiM6

3. Check whether the transaction is confirmed using gettransaction:
Windows OS -

    qtum-cli.exe --regtest --rpcuser=username --rpcpassword=password --rpcport=13889

gettransaction INSERT_TRANSACTION_ID

Mac OS -

    ./qtum-cli --regtest --rpcuser=username --rpcpassword=password --rpcport=13889 gettransaction

INSERT_TRANSACTION_ID
