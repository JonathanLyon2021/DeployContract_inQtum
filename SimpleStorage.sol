//SPDX-License-Identifier: MIT
//pragma solidity ^0.6;

contract SimpleStorage {
        uint storedData;
 
        function set(uint data) public {
        storedData = data;
    }
   
}
