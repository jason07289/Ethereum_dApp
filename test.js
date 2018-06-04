
//contractAddress = null;
contractAddress = contract.address;
function button1_click() {
  var registerContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"GetBirth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"uname","type":"string"}],"name":"SetName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ubirth","type":"uint256"}],"name":"SetBirth","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"uimage","type":"string"}],"name":"SetImagePath","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"GetImagePath","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"GetName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]);
var register = registerContract.new(
   {
     from: web3.eth.accounts[0],
     data: '0x608060405234801561001057600080fd5b50610523806100206000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634b83135a1461007d5780634df9dcd3146100a85780638720f057146101115780638bd7cccb1461013e578063a0efe699146101a7578063fe704a9d14610237575b600080fd5b34801561008957600080fd5b506100926102c7565b6040518082815260200191505060405180910390f35b3480156100b457600080fd5b5061010f600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506102d0565b005b34801561011d57600080fd5b5061013c600480360381019080803590602001909291905050506102ea565b005b34801561014a57600080fd5b506101a5600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506102f4565b005b3480156101b357600080fd5b506101bc61030e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101fc5780820151818401526020810190506101e1565b50505050905090810190601f1680156102295780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561024357600080fd5b5061024c6103b0565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561028c578082015181840152602081019050610271565b50505050905090810190601f1680156102b95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60008054905090565b80600190805190602001906102e6929190610452565b5050565b8060008190555050565b806002908051906020019061030a929190610452565b5050565b606060028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103a65780601f1061037b576101008083540402835291602001916103a6565b820191906000526020600020905b81548152906001019060200180831161038957829003601f168201915b5050505050905090565b606060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104485780601f1061041d57610100808354040283529160200191610448565b820191906000526020600020905b81548152906001019060200180831161042b57829003601f168201915b5050505050905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061049357805160ff19168380011785556104c1565b828001600101855582156104c1579182015b828111156104c05782518255916020019190600101906104a5565b5b5090506104ce91906104d2565b5090565b6104f491905b808211156104f05760008160009055506001016104d8565b5090565b905600a165627a7a72305820f17d3e5605cc0b52863cb207e047ba1c6da2be498c0d84e7ca68a02090f4a2350029',
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
         contractAddress = contract.address;
         c = contract.address;
         //location.href="regiser.html?"+ c;
/*         function post_to_url(path,params, method) {
    method = method || "post"; // ���� ���� �⺻���� POST��


    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    //�������� ���� ���Խ�Ų��.
    for(var key in params) {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);

        form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
}
*/
        // post_to_url(location.href,{'type1':'aaa','type2':'bbb'});
         document.getElementById('pendingcon').innerHTML = '(contract주소: ' + contract.address + ')';
         document.getElementById('pendingconbtn').innerHTML = '<a href="register.html"><button> 해당 트랜잭션에 정보입력 </button></a>';


         startApp();

    }



 })
}
//var contractAddress = '0xACC97451A0b0C2B8123E1E112B5CfF040186FBeC';

var abi = [{"constant":true,"inputs":[],"name":"GetBirth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"uname","type":"string"}],"name":"SetName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ubirth","type":"uint256"}],"name":"SetBirth","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"uimage","type":"string"}],"name":"SetImagePath","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"GetImagePath","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"GetName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}];
//var registerContract;
//var register;
window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8780"));

  }
  // Now you can start your app & access web3 freely:
  startApp();
});
function startApp() {
  registerContract = web3.eth.contract(abi);
  register = registerContract.at(contractAddress);
  document.getElementById('contractAddr').innerHTML = getLink(contractAddress);
  web3.eth.getAccounts(function(e,r){
    document.getElementById('accountAddr').innerHTML = getLink(r[0]);
  });
  //getBirthValue();
  //getNameValue();
  //getImagepathValue();
  //getContractAdress();
}
function getLink(addr) {
  return '<a target="_blank" href=https://testnet.etherscan.io/address/' + addr + '>' + addr +'</a>';
}




function setBirthValue() {
  var newBValue = document.getElementById('newBirthValue').value;
  var txid
  register.SetBirth(newBValue, function(e,r){  //�����ִ� newValue�� �ٲ�����~
    document.getElementById('birthResult').innerHTML = 'Transaction id: ' + r + '<span id="pending" style="color:red;">(Pending)</span>';
    txid = r;
  });


  var filter = web3.eth.filter('latest');
  filter.watch(function(e, r) {
    getBirthValue();
    getNameValue();
    getImagepathValue();
    web3.eth.getTransaction(txid, function(e,r){
      if (r != null && r.blockNumber > 0) {
        document.getElementById('pending').innerHTML = '(기록된 블록: ' + r.blockNumber + ')';
        document.getElementById('pending').style.cssText ='color:green;';
        document.getElementById('birth').style.cssText ='color:green; font-size:300%;';
        document.getElementById('name').style.cssText ='color:green; font-size:300%;';
        document.getElementById('imagepath').style.cssText ='color:green; font-size:300%;';
        filter.stopWatching();//ddd
      }



   });
 });
}
