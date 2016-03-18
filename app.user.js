// ==UserScript==
// @name			Sample Script
// @namespace		http://www.entereal.co.jp
// @description	 This is a sample script by ENTEREAL LLP
// @include		 http://www.google.co.jp/*
// @include		 http://www.yahoo.co.jp/*
// @exclude		 http://www.bing.com/*
// ==/UserScript==

(function(){

var zbody=document.body;
var zdiv=document.createElement("div");
zdiv.style.top=10;
zdiv.style.left=10;
zdiv.style.width=100;
zdiv.style.height=100;
zdiv.style.backgroundColor="#ffffcc";

zdiv.style.left="8px"; 
zdiv.style.top="10px"; 

zdiv.innerHTML="点我一下";

zbody.appendChild(zdiv);


var objDiv = document.createElement("div");
objDiv.setAttribute("id", "divItem");
objDiv.style.float="left";
objDiv.style.width="150px";
objDiv.style.height="50px";

objDiv.style.top="5px";
objDiv.style.left="5px";

objDiv.style.backgroundColor="#ffffcc";

zbody.appendChild(objDiv);


function scrollImg(){
    var posX,posY;
    if (window.innerHeight) {
        posX = window.pageXOffset;
        posY = window.pageYOffset;
    }
    else if (document.documentElement && document.documentElement.scrollTop) {
        posX = document.documentElement.scrollLeft;
        posY = document.documentElement.scrollTop;
    }
    else if (document.body) {
        posX = document.body.scrollLeft;
        posY = document.body.scrollTop;
    }
}
scrollImg();

	
})();
