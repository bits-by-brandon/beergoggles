var image;

//Background page

chrome.browserAction.setBadgeText({
   text: "Beer"
});

chrome.browserAction.onClicked.addListener(function (tab) {
   // No tabs or host permissions needed!
   
   chrome.tabs.executeScript({
      file: 'main.js'
   });
   
   //grab screenshot and save into dataURL
   chrome.tabs.captureVisibleTab(function(dataURL){
      image = dataURL;
   });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "hello")
      sendResponse({output: image});
  });