var o = document.body;
//创建DIV 
function createDIV(text) {
    var div = document.createElement("div");
    div.style.width = 100px; //DIV宽度
    div.style.height = 100px; //DIV高度
    div.style.setAttribute("border", "#e6e7e8 1px solid"); //边框颜色
    div.style.top = 0px; //DIV上边距
    div.style.left = 0px; //DIV左边距   
    div.innerHTML = text;
    o.appendChild(div);
}
createDIV("网页教学网：http://www.ffasp.com/");


document.getElementById('lst-ib').value = "Edit by Sample Script";


var votebutton = document.createElement("input"); 
votebutton.type = "button";
votebutton.value = "支持，顶一下"; 
votebutton.name = "99";
zbody.appendChild(votebutton);






window.onscroll = function() {
    var oDiv = document.getElementById('div1');
    var DivScroll = document.documentElement.scrollTop || document.body.scrollTop; //获取移动高度
    //                        oDiv.style.top = (document.documentElement.clientHeight - oDiv.offsetHeight)/2 + DivScroll + 'px';
    move(parseInt((document.documentElement.clientHeight - oDiv.offsetHeight) / 2 + DivScroll)); //调用传参，其中里面的参数是DIV要走的终点。也就是（可视高度-DIV高度）/2+移动高度
};
var timer = null;
function move(end) {
    clearInterval(timer); //首先，先关闭之前如果有开启的setInterval;
    timer = setInterval(function() {
        var oDiv = document.getElementById('div1');
        var speed = (end - oDiv.offsetTop) / 5; //计算DIV要走的速度，DIV要走的速度就等于（终点-offsetTop高度）/缩放系数
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //为了避免小数，将其取整
        if (oDiv.offsetTop == end) { //当DIV到达终点，则关闭setInterval;
            clearInterval(timer);
        } else {
            oDiv.style.top = oDiv.offsetTop + speed + 'px'; //移动div
        }
    },
    30);
}


    // ここに処理を記載する
    alert('----------START----------');
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


    alert('----------END----------');



zdiv.style.buttom=“0px”;
zdiv.style.right=“0px”;
zdiv.style.color=#cccccc;
zdiv.style.width=150px;
zdiv.style.height=30px;
zdiv.style.background-color=“navy”;







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
 
    var ad=document.getElementById("divItem");
    ad.style.top=(posY+100)+"px";
    ad.style.left=(posX+50)+"px";
    setTimeout("scrollImg()",100);