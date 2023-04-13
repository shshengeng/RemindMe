let numberMins = 0;
const regExp = /^[1-9]\d*$/;

document.addEventListener('DOMContentLoaded', function() {

    let frame = document.getElementById("frame");
    let ipt = document.getElementById("input");
    let submit = document.getElementById("submit");
    let cancel = document.getElementById("cancel");

    submit.addEventListener("click", function(){
        var inputValue = 0;
        if(ipt.value != ""){
            inputValue = ipt.value;
        }
        if(!regExp.test(inputValue) || ipt.value == ""){
            alert("Please Input Positive Int");
        }else{
            numberMins = inputValue;
            console.log(numberMins);
            chrome.runtime.sendMessage({numberMins: numberMins}, function(){
                window.close();
            });
            
        }
        
    })

    cancel.addEventListener("click", function(){
        window.close();
    })

    // chrome.storage.local.get("numberMins", function(result) {
    //     ipt.value = result.numberMins;
    // });

    // chrome.storage.onChanged.addListener(function(changes, namespace) {
    //     for (var key in changes) {
    //       if (key === 'numberMins') {
    //         ipt.value = changes[key];
    //       }
    //     }
    // });
      
    //   chrome.storage.local.get(['yourKey'], function(result) {
    //     console.log('Value currently is ' + result.yourKey);
    //   });
      
  
});


  
