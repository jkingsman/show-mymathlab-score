chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	chrome.pageAction.setIcon({"tabId":tabId, "path":"img/question19.png"});
	chrome.pageAction.show(tabId);
});

var links = document.getElementsByTagName("a");

for(var i=0; i<links.length; i++) {
    if(links[i].innerHTML.indexOf("see score") > -1){
           links[i].click();
    }
}