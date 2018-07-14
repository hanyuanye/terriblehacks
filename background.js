/*chrome.tabs.onCreated.addListener(function (tab){
    alert(tab.url);
    //window.location.replace("http://stackoverflow.com");
    
});*/

var authen = false;
var id = "";
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(changeInfo.url){
        var a = changeInfo.url;
        
        twitterbot(a.toString());
        while(!authen){
            alert("Youre unloved");
            getlikes(id);
        }
        authen = false;

        /*chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
            chrome.tabs.update(tab.id, {url: a.toString()});
        });*/
    }
}); 

function twitterbot(body) {
    $.ajax({
        url: 'http://127.0.0.1:5000/twitterbot',
        type:"POST",
        contentType:"application/text",
        dataType:"text",
        data:body,
        async:false,
		success: function (msg) {
            id = msg.substr(6, msg.length - 8);
		}
    });
//event.preventDefault();
}

function getlikes(body) {
	console.log(body);
    $.ajax({
        url: 'http://127.0.0.1:5000/getlikes',
        type:"POST",
        contentType:"application/text",
        dataType:"text",
        data: body,
        async:false,
		success: function (msg) {
            var lol = msg.substr(10, msg.length - 15);
            authen = !(lol == "fa");
		}
    });
//event.preventDefault();
}

/*chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(changeInfo.url){
        var a = changeInfo.url;
        //alert(changeInfo.url);

        chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
            chrome.tabs.update(tab.id, {url: "redirect.html"});
            alert(changeInfo.url);
            chrome.tabs.executeScript(tab.ib, {
                file: 'bot.js'
            })
        });

        /*chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
            chrome.tabs.update(tab.id, {url: a});
        }); //sends me to the original page after
    }
}); */

/*function addTwitterID(a) {
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode(a);
    newDiv.appendChild(newContent);
    //var currentDiv = document.getElementById('twitterID');
    //document.body.insertBefore(newDiv, currentDiv);
    document.body.appendChild(newDiv);
}*/

/*chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    if(details.frameId === 0) {
        //fires only when details.url === currentTab.url, and restricts it to one..
        chrome.tabs.get(details.tabId, function(tab) {
            if(tab.url === details.url) {
                alert(tab.url);
            }
        });
    }
});*/
    
/*chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function(tab){
        console.log(tab.url);

    });
});*/