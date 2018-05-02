pragma solidity ^0.4.0;



contract register {

    uint birth;
    string name;
    string imagepath;


    function SetBirth(uint ubirth) {

        birth = ubirth;

    }
    function SetName(string uname) {

        name = uname;

    }
    function SetImagePath(string uimage) {

        imagepath = uimage;

    }



    function GetBirth() constant returns (uint) {

        return birth;

    }
     function GetName() constant returns (string) {

        return name;

    }
     function GetImagePath() constant returns (string) {

        return imagepath;

    }
}
