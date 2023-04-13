let number_Mins = 0;
let timer = null;


function startTimer() {
    timer = setInterval(function() {
    //   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    //     if (chrome.runtime.lastError || tabs.length === 0) {
    //       console.error("Failed to get active tab: " + chrome.runtime.lastError);
    //       return;
    //     }
    //     console.log(tabs[0]);
    //     chrome.tabs.sendMessage(tabs[0].id, {timetime: "Times up"}, function(){});
    //   });
        chrome.notifications.create({
            type: 'basic',
            iconUrl: '../imgs/icons/clock-64.png',
            title: 'Time to Relax!',
            message: 'Please relax for a while!'
        }, function() {
            console.log('Notification created');
        });
      
    }, number_Mins * 60 * 1000);
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
     console.log('Message from popup.js:', request.numberMins);
    if(request.numberMins){
        number_Mins = request.numberMins;
        // chrome.storage.local.set({"numberMins": number_Mins});
        startTimer();
    }
   
});
  