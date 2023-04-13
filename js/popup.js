let numberMins = 0;
const regExp = /^[1-9]\d*$/;

document.addEventListener('DOMContentLoaded', function() {


    let frame = document.getElementById("frame");
    let ipt = document.getElementById("input");
    let submit = document.getElementById("submit");
    let reset = document.getElementById("reset");
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

    reset.addEventListener("click", function(){
        ipt.value = "";
        chrome.storage.local.set({"numberMins": ""});
        chrome.runtime.sendMessage({reset: "true"});
    })

    cancel.addEventListener("click", function(){
        window.close();
    })

    chrome.storage.local.get("numberMins", function(result) {
        ipt.value = result.numberMins;
    });

  
});


  
