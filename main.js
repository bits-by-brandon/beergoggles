faceImage = chrome.extension.getURL("face1.png");
//logo = chrome.extension.getURL("logo.svg");
var image;
var loadDelay;
var messDelay;
var body = document.getElementsByTagName('body');
var bottleClip;
var faces = [];
var face;
var facenum;
var count;
var setDetect = true;
// add required styles
document.body.innerHTML += '<style>.loadin{opacity:0.95 !important}.noscroll { overflow:none; height: 100%; } .hide{bottom: -50px !important;} #bottle{ position: absolute; left: 50%; top: 50%; margin-top: -300px; margin-left: -310px; } #Wave_anim{ transition: all 2s ease-in-out; -webkit-transform: translateY(0px); transform: translateY(0px); } use#Wave_Anim{transform: translateY(0px); transition: transform 1.5s ease;} .active{ -webkit-transform: translateY(250px); transform: translateY(250px) !important; } .cap_active{ transform: translate(0,0) rotate(-160deg) !important; } .bottle_cap_active{ transform: rotate(-1200deg) !important; opacity: 0 !important; } #Cap{ transition: all 1s cubic-bezier(0, 0, 0.63, 0.99); transform: translate(0,0) rotate(0); transform-origin: -70px; -webkit-transform: transform: translate(0,0) rotate(0); } #bottle_Cap{ opacity: 1; transition: all 1s linear; transform: rotate(0); transform-origin: center; -webkit-transform: transform: rotate(0); }</style>';

//add div and goggle img to body tag of DOM
function loadScreen() { document.body.innerHTML += '<div id="loadback" class="" style="position:fixed; width:100vw;height:100vh;left:0px;top:0px;background-color:#333;opacity:0;z-index:1010;transition:opacity 300ms;"><svg id="bottle" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="350px" height="400px" viewBox="-274.582 -160 350 350" enable-background="new -286.582 -166.597 653 701.5" xml:space="preserve"><path id="Glass" opacity="0.4" fill="#EAEAEA" d="M69.75,199.184v-16.728V164.14V83.493v-4.271V66.457 c0.001-9.451-3.465-18.902-9.451-26.154l-5.988-6.925c-2.529-3.151-4.104-7.254-4.104-11.34v-57.802 c0-1.265-0.949-2.199-2.195-2.199h-23.93c-1.261,0-2.196,0.951-2.196,2.199v57.473c0,4.103-1.576,8.188-4.104,11.34l-5.985,6.924 C5.805,47.226,2.344,56.678,2.344,66.13v13.093v4.271v80.646v18.316v16.134c0.026,7.917,6.44,14.328,14.359,14.35h39.952 C63.818,212.31,69.46,206.44,69.75,199.184z"/><g><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="36.0464" y1="-25.4304" x2="36.0463" y2="212.9402"><stop offset="0" style="stop-color:#CF8A00"/><stop offset="1" style="stop-color:#F0B132"/></linearGradient><path clip-path="url(#Wave_1_)" fill="url(#SVGID_1_)" d="M69.75,199.184v-16.728V164.14V83.493v-4.271V66.457 c0.001-9.451-3.465-18.902-9.451-26.154l-5.988-6.925c-2.529-3.151-4.104-7.254-4.104-11.34v-41.956v-3.313 c0-1.265-0.949-2.199-2.195-2.199h-23.93c-1.261,0-2.196,0.951-2.196,2.199v3.313v41.627c0,4.103-1.576,8.188-4.104,11.34 l-5.985,6.924C5.805,47.226,2.344,56.678,2.344,66.13v13.093v4.271v80.646v18.316v16.134c0.026,7.917,6.44,14.328,14.359,14.35 h39.952C63.818,212.31,69.46,206.44,69.75,199.184z"/><g><defs><path id="Wave" d="M69.75-27.467c-6.743,0-6.743-6.74-13.486-6.74c-6.742,0-6.742,6.74-13.485,6.74 c-6.738,0-6.738-6.74-13.477-6.74c-6.741,0-6.741,6.74-13.481,6.74c-6.738,0-6.738-6.74-13.477-6.74v247.305H69.75V-27.467z"/></defs><clipPath id="Wave_1_"><use id="Wave_Anim" xlink:href="#Wave"  overflow="visible"/></clipPath></g></g><linearGradient id="Shine_1_" gradientUnits="userSpaceOnUse" x1="21.6465" y1="87.4456" x2="69.75" y2="87.4456"><stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.4"/><stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0.2"/></linearGradient><path id="Shine" fill="url(#Shine_1_)" d="M56.655,212.94c7.163-0.63,12.805-6.5,13.095-13.756v-15.031V66.372 c0.001-9.451-3.465-18.902-9.451-26.154l-5.988-6.925c-2.529-3.151-4.104-7.254-4.104-11.34v-57.802 c0-1.265-0.949-2.199-2.195-2.199h-5.55c0,0,0,47.579,0,59.587c0,19.759-20.814,24.509-20.814,45.5c0,17.509,0,131.5,0,131.5 c0,7.953,6.447,14.4,14.4,14.4h5.496H56.655z"/><g><linearGradient id="Label_1_" gradientUnits="userSpaceOnUse" x1="2.3438" y1="129.6931" x2="69.75" y2="129.6931"><stop  offset="0" style="stop-color:#000000;stop-opacity:0.75"/><stop  offset="1" style="stop-color:#1A1A1A;stop-opacity:0.85"/></linearGradient><rect id="Label" x="2.344" y="92.394" fill="url(#Label_1_)" width="67.406" height="74.599"/><path id="Logo" fill="#D1D1D1" d="M55.475,111.023v30.888l-19.428,6.452l-19.429-6.452v-30.888H55.475z M18.212,139.635 l12.598-10.017v-9.563h6.604c1.619,0,2.994,0.361,4.112,1.062l10.687-8.5h-34V139.635z M53.883,113.3l-11.156,8.88 c0.757,0.866,1.153,1.983,1.153,3.354v0.076c0,1.822-0.608,3.214-1.821,4.174c-1.216,0.963-2.836,1.443-4.857,1.443h-2.125v4.401 H30.81v-4.038l-11.84,9.404l17.077,5.692l17.836-5.92V113.3z M38.097,123.773c-0.103,0-0.256-0.012-0.455-0.038 c-0.203-0.025-0.382-0.038-0.532-0.038h-2.05v2.504L38.097,123.773z M39.311,124.835l-3.795,2.96h1.518 c1.67,0,2.505-0.683,2.505-2.049c0-0.405-0.091-0.693-0.236-0.911H39.311z"/></g><linearGradient id="Cap_1_" gradientUnits="userSpaceOnUse" x1="18.5146" y1="-37.9631" x2="53.5762" y2="-37.9631"><stop  offset="0" style="stop-color:#000000;stop-opacity:0.75"/><stop offset="1" style="stop-color:#1A1A1A;stop-opacity:0.85"/></linearGradient> <g id="Cap"><path id="bottle_Cap" fill="url(#Cap_1_)"d="M46.381-41.561H25.71c-3.974,0-7.195,3.222-7.195,7.195h35.062 C53.576-38.339,50.354-41.561,46.381-41.561z"/></g></svg> </div><div id="loadMess" class="hide" style="position:fixed;left:0;width:100%;height:50px;bottom:0px;background-color:#eee;padding:0px;opacity:0.9;z-index:9999;transition:bottom 300ms ease"><h2 style="font-size:15px;font-family:sans-serif;letter-spacing:2px;text-transform:uppercase;color:#434343;text-align:center;line-height:28px">While you scroll, I\'ll drink.</h2></div>';

   var loadback = document.getElementById('loadback');
   var loadMess = document.getElementById('loadMess');
   window.setTimeout(fadeIn, 0);
};

function fadeIn() {
   //locks scroll 
   $('body,html').on('scroll touchmove mousewheel', function(e){
     e.preventDefault();
     e.stopPropagation();
     return false;
   });
   console.log("lock scroll");
   loadback.classList.add("loadin");
   window.setTimeout(function(){
      bottleAnim();
   },500);
}

function fadeOut() {
   $('body,html').off('scroll touchmove mousewheel');
   loadback.classList.remove("loadin");
   window.setTimeout(function(){
	   cap.attr('class', '');
	   bottle_cap.attr('class', '');
	   bottle.attr('class', '');
   }, 300);
}

function divInject() {
   document.body.innerHTML += '<svg version="1.1" id="gogglesMain" style="position:fixed;z-index:1001" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600px" height="280px" viewBox="0 0 317.361 139.413" enable-background="new 0 0 317.361 139.413" xml:space="preserve"> <g><path fill="#231F20" d="M247.654,7c34.577,0,62.707,28.13,62.707,62.707s-28.13,62.707-62.707,62.707 c-33.396,0-45.216-21.782-52.278-34.797l-0.533-0.982c-4.753-8.73-15.883-29.175-36.162-29.175 c-20.277,0-31.006,19.705-36.162,29.175l-0.534,0.983c-7.062,13.014-18.882,34.796-52.277,34.796C35.13,132.413,7,104.283,7,69.707 S35.13,7,69.707,7h78.683h20.582H247.654 M247.654,0c-13.343,0-49.901,0-78.683,0c-5.938,0-12.993,0-20.582,0 c-28.781,0-65.34,0-78.683,0C31.208,0,0,31.208,0,69.707c0,38.498,31.208,69.707,69.707,69.707s51.866-26.404,58.959-39.433 c5.621-10.324,14.696-25.522,30.014-25.522c15.182,0,24.394,15.198,30.014,25.522c7.094,13.028,20.462,39.433,58.96,39.433 c38.499,0,69.707-31.209,69.707-69.707C317.361,31.208,286.153,0,247.654,0L247.654,0z"/><clipPath id="svgPath"><path id="clipPath" stroke="#231F20" stroke-miterlimit="10" d="M247.654,0c-13.343,0-49.901,0-78.683,0c-5.938,0-12.993,0-20.582,0 c-28.781,0-65.34,0-78.683,0C31.208,0,0,31.208,0,69.707c0,38.498,31.208,69.707,69.707,69.707s51.866-26.404,58.959-39.433 c5.621-10.324,14.696-25.522,30.014-25.522c15.182,0,24.394,15.198,30.014,25.522c7.094,13.028,20.462,39.433,58.96,39.433 c38.499,0,69.707-31.209,69.707-69.707C317.361,31.208,286.153,0,247.654,0L247.654,0z"/></clipPath><path id="visor" fill="rgba(0, 0, 0, 0)" stroke-miterlimit="10" d="M247.654,0c-13.343,0-49.901,0-78.683,0c-5.938,0-12.993,0-20.582,0 c-28.781,0-65.34,0-78.683,0C31.208,0,0,31.208,0,69.707c0,38.498,31.208,69.707,69.707,69.707s51.866-26.404,58.959-39.433 c5.621-10.324,14.696-25.522,30.014-25.522c15.182,0,24.394,15.198,30.014,25.522c7.094,13.028,20.462,39.433,58.96,39.433 c38.499,0,69.707-31.209,69.707-69.707C317.361,31.208,286.153,0,247.654,0L247.654,0z"/></g></svg>';

   document.body.innerHTML += '<div id="background" style="position:fixed;width:100vw;height:100vh;top:0;left:0;z-index:1000;-webkit-clip-path:url(#svgPath)"><img id="overlay" style="position:fixed;width:100%;height:100%;top:0px;left:0px;z-index:10"></div>';
   //strange things happen when trying to make these variables global----------------------*********************
   var clipPath = document.getElementById('clipPath');
   var clip = document.getElementById('svgPath');
   var goggles = document.getElementById('gogglesMain');
   var background = document.getElementById('background');
   var overlay = document.getElementById('overlay');
   var visor = document.getElementById('visor');
};

loadScreen();

divInject();

//detects when user starts and stops scrolling.
window.addEventListener('scroll', function () {
   if (loadDelay !== null) {
      clearTimeout(loadDelay);
      clearTimeout(messDelay);
      console.log("delaying");
      visor.setAttribute("fill", "rgba(0, 0, 0, 0.9)");
      $("#loadMess").removeClass("hide");
      document.getElementById("background").style.display = "none";
      
   }
   messDelay = setTimeout(function () {
      $("#loadMess").addClass("hide");
   }, 400);
   loadDelay = setTimeout(function () {
      fadeIn();
      gogglesMain.style.display = "none";
      window.setTimeout(reload, 50);
   }, 700); //change this value to change the delay after user srcolls to start re-scan
}, false);

//sends out a message to background.js that returns the Data URL to the screenshot
function imgRequest(input) {
   console.log("imgRequest(" + input + ")");
   chrome.runtime.sendMessage({
      hail: input
   }, function (response) {
      //fadeIn();
      window.setTimeout(function () {
         image = response.output; //stores data url in image
         console.log("sendMessage returns " + response.output);
         setImage(image);
      }, 300);
   });
};


//applies the screenshot to #background src
function setImage(image) {
   overlay.src = image;
   console.log(overlay.style.width);
   detectFace();
   gogglesMain.style.display = "block";
   visor.setAttribute("fill", "rgba(0, 0, 0, 0)");
   document.getElementById("background").style.display = "block";
};

//bottle animation
var bottle = $("#Wave_Anim");
var cap = $("#Cap");
var bottle_cap = $("#bottle_Cap");

function bottleAnim() {
    setTimeout(function(){
		bottle.attr('class', 'active');
		setTimeout(function(){
			imgRequest("init");
		}, 1000);
	} , 500);
	cap.attr('class', 'cap_active');
	bottle_cap.attr('class', 'bottle_cap_active');
}

//passes background image into facial detection
function detectFace() {
   $('#overlay').faceDetection({
      complete: function (facePre) {
         if (setDetect == true){
            faces = facePre;
            facenum = faces.length
         }
         count = 0;
         for(i = 0; i < facenum; i++){
            var face = faces[i];
            var faceX = face.x;
            var faceY = face.y;
            var faceHeight = face.height;
            var faceWidth = face.width;
            faceX = faceX - faceWidth;
            faceY = faceY - faceHeight;
            
            faceImage = chrome.extension.getURL("face"+ Math.floor((Math.random() * 5) + 1)+ ".png");
            background.innerHTML += '<img src="'+faceImage+'" class="face" style="position:fixed;height:'+ faceHeight * 3+'px;width:'+ faceWidth * 3+'px;z-index:400;left:' + faceX + 'px;top:'+ faceY +'px;">';
                           
            if(i + 1 == faces.length){
			   //bottleAnim();
               window.setTimeout(fadeOut, 2000);
            }
         }
      }
   });
};


//clears dom and dataurl for new screenshot
function reload() {
   $('body').addClass('noscroll');
   overlay.src = " ";
   $('.face').remove();
   console.log("overlay.src is now null");
   imgRequest("refresh");
};


//hide cursor
document.body.style.cursor = 'none';


var mouse = {
   x: 0,
   y: 0
};

//mouse listener to move goggles
document.addEventListener('mousemove', mouseListen, false);

function mouseListen(e) {
   mouse.x = e.clientX || e.pageX;
   mouse.y = e.clientY || e.pageY;
   mouseScroll = window.scrollY - 90
   gogglesMain.style.left = mouse.x - 300 + "px";
   gogglesMain.style.top = mouse.y - 100 + "px";
   clipPath.setAttribute("transform", "translate(" + (mouse.x - 290) + "," + (mouse.y - 90) + ") scale(1.83,1.83)");
}

//esc key cancels most events
document.onkeydown = function goggleDisable(e) {
   esc = e.keyCode;
   if (esc == 27) {
      document.removeEventListener('mousemove', mouseListen, false);
      document.body.style.cursor = 'auto';

      var exist = document.getElementById('background');

      if (!!exist == true) {
         document.getElementById('background').remove();
         document.getElementById('gogglesMain').remove();
         document.getElementById('loadback').remove();
      }
   }
};
