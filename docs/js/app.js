App = {
     web3Provider: null,
     contracts: {},
     //account: 0x0,

     init: function() {
       return App.initWeb3();
     },

     //Initialize web3
     initWeb3: function() {
         if(typeof web3 !== 'undefined') {
           //Reuse the provider of the Web3 object injected by Metamask     
           App.web3Provider = web3.currentProvider;
         } else {
           //Create a new provider of the web3 object injected by our node
           App.web3Provider = new Web3.providers.HttpProvider('http://167.71.47.69:42421'); 
         }
         web3 = new Web3(App.web3Provider);

         App.displayAccountInfo();


          return App.initContract();
     },

    //  displayAccountInfo: function() {
    //    web3.eth.getCoinbase(function(err, account){
    //      if (err === null) {
    //        App.account = account;
    //        $('#account').text(account)
    //        web3.eth.getBalance(account, function(err, balance){
    //          if(err === null) {
    //            $('#accountBalance').text(balance);   
    //          }
    //       })
    //     }     
    //   });
    // },

    displayAccountInfo: function(){
      //Get balance of 0x004FE394a794DCd0b5D2B2FdA364CD9f22859D27
      const account = '0x004FE394a794DCd0b5D2B2FdA364CD9f22859D27';
      $('#account').text(account)
      web3.eth.getBalance(account, function(err,balance){
        if(err===null) {
        $('#accountBalance').text(balance);  
        }
      });
      //Get lastest Block
      web3.eth.getBlockNumber(function(err,block){
        if(err===null) {
        $('#BlockNumber').text(block);
        }   
      });
    },


     initContract: function() {
          /*
           * Replace me...
           */
     },
};

$(function() {
     $(window).load(function() {
          App.init();
     });
});
