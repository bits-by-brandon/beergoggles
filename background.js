//Background page

chrome.browserAction.setBadgeText({
   text: "Beer"
});

chrome.browserAction.onClicked.addListener(function (tab) {
   // No tabs or host permissions needed!
   chrome.tabs.captureVisibleTab(function(dataURL){
      
   });
   
   chrome.tabs.executeScript({
      file: 'main.js'
   });
});