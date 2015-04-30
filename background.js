var image;

//Background page


chrome.browserAction.onClicked.addListener(function (tab) {
   // No tabs or host permissions needed!
   
   chrome.tabs.executeScript({
      file: 'main.js'
   });
   
   //grab screenshot and save into dataURL
   chrome.tabs.captureVisibleTab(function(initURL){
      image = initURL;
      console.log(image);
   });
});

//listens for .sendMessage from main.js, looks for init or refresh
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.hail == "init"){
      sendResponse({output: image});
    }else if(request.hail == "refresh"){
       chrome.tabs.captureVisibleTab(function(dataURL){
         image = dataURL;
         console.log(image);
         sendResponse({output: image});
       });
    }
    return true;
  });