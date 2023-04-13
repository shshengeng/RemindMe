let number_Mins = 0;
let timer = null;
let counter = 1;


function startTimer() {
    timer = setInterval(function() {
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
    counter--;
    if(request.numberMins && counter >= 0){
        number_Mins = request.numberMins;
        chrome.storage.local.set({"numberMins": number_Mins});
        startTimer();
    }
    if(request.reset){
        counter = 1;
        clearInterval(timer);
    }
});
  