// ==UserScript==
// @name			Sample Script
// @namespace		http://www.entereal.co.jp
// @description	 This is a sample script by ENTEREAL LLP
// @include		 http://www.google.co.jp/*
// @include		 http://www.yahoo.co.jp/*
// @exclude		 http://www.bing.com/*
// ==/UserScript==

(function(){
    // ここに処理を記載する
    alert('----------START----------');

    var zbody=document.body;
    var zdiv=document.createElement("div");

    zdiv.style.width=100;
    zdiv.style.height=100;
    zdiv.style.backgroundColor="#ffffcc";
    zdiv.style.left="8px"; 
    zdiv.style.top="10px"; 
    zdiv.innerHTML="点我一下";

    zbody.appendChild(zdiv);

    alert('----------END----------');
})();
