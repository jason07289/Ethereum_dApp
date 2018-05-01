<<<<<<< HEAD
pragma solidity ^0.4.0; 
 
contract SimpleStorage {
    uint storedData;
 
    function set(uint x) {
        storedData = x;
    }
 
    function get() constant returns (uint) {
        return storedData;
    }
=======
pragma solidity ^0.4.0; 
 
contract SimpleStorage {
    uint storedData;
 
    function set(uint x) {
        storedData = x;
    }
 
    function get() constant returns (uint) {
        return storedData;
    }
>>>>>>> 1c2a7e2dcfb63e95540f7d7e0599b0c4e78ec7a9
}