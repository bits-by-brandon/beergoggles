faceImage = chrome.extension.getURL("face1.png");
//logo = chrome.extension.getURL("logo.svg");
var image;
var loadDelay;
var body = document.getElementsByTagName('body');
var bottleClip;
var faces = [];
var face;
var facenum;
var count;
var setDetect = true;
// add required styles
document.body.innerHTML += '<style>.loadin{opacity:0.95 !important}.noscroll { position: fixed; overflow-y:scroll }</style>'

//add div and goggle img to body tag of DOM
function loadScreen() {
   document.body.innerHTML += '<div id="loadback" class="" style="position:fixed; width:100vw;height:100vh;left:0px;top:0px;background-color:#fff;opacity:0;z-index:1010;transition:opacity 300ms;"><svg id="bottleSvg" style="position:absolute;top:50%;left:50%;margin-top:-150px;margin-left:-40px;" version="1.1" id="Layer_1" x="0px" y="0px" width="79.837px" height="284.804px" viewBox="0 0 79.837 284.804" enable-background="new 0 0 79.837 284.804" xml:space="preserve"><g><defs><rect id="bottleClip" x="2.402" y="3.294" width="73.719" height="278.329"/></defs><clipPath id="bottle"><use xlink:href="#bottleClip" overflow="visible" -webkit-transition:transform 1s ease-in-out/> </clipPath> <g id="beer_fill" clip-path="url(#bottle)"><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="39.9185" y1="278.7175" x2="39.9184" y2="6.2151"><stop offset="0" style="stop-color:#CF8A00"/><stop offset="1" style="stop-color:#F0B132"/></linearGradient> <path fill="url(#SVGID_3_)" d="M64.17,106.081l-5.988-6.925c-2.53-3.151-4.105-7.253-4.105-11.339V44.53V22.918V17.24v-5.512V8.414 c0-1.264-0.949-2.199-2.196-2.199H27.952c-1.26,0-2.196,0.951-2.196,2.199v3.314v5.512v5.678V44.53v42.958 c0,4.102-1.576,8.188-4.104,11.339l-5.985,6.924c-5.991,7.253-9.452,16.705-9.452,26.157v13.093v4.27v80.646v18.317v28.284 c0,1.266,0.949,2.2,2.199,2.2h63.008c1.263,0,2.2-0.952,2.2-2.2v-28.284v-18.317v-80.646v-4.27v-12.765 C73.621,122.784,70.156,113.333,64.17,106.081z"/></g></g><g><path d="M33.451,178.58h8.153c2,0,3.686,0.437,5.059,1.311l13.218-10.496H17.894v33.365l15.558-12.369V178.58z"/><path d="M68.963,102.124c-0.03-0.037-0.061-0.073-0.092-0.108l-5.906-6.831c-1.675-2.124-2.674-4.871-2.674-7.369V44.53V22.918 V17.24v-5.512V8.414c0-4.718-3.693-8.414-8.41-8.414H27.953c-4.717,0-8.411,3.696-8.411,8.414v3.314v5.512v5.678V44.53v42.958 c0,2.535-0.973,5.216-2.673,7.37l-5.904,6.83c-0.031,0.035-0.061,0.071-0.09,0.106C3.963,110.161,0,121.137,0,131.908v13.093v4.27 v80.646v18.317v28.285c0,4.718,3.696,8.415,8.413,8.415h63.009c4.719,0,8.415-3.697,8.415-8.415v-28.285v-18.317v-80.646v-4.27 v-12.765C79.837,121.47,75.873,110.495,68.963,102.124z M25.756,11.728V8.414c0-1.248,0.936-2.199,2.196-2.199h23.928 c1.247,0,2.195,0.936,2.195,2.199v3.314v0.701h-28.32V11.728z M73.622,229.917v18.317v28.285c0,1.248-0.938,2.2-2.2,2.2H8.413 c-1.249,0-2.199-0.936-2.199-2.2v-28.285v-18.317v-2.146h67.408V229.917z M15.925,205.572v-38.147h47.986v38.147l-23.994,7.966 L15.925,205.572z M73.622,145.001v4.27v3.901H6.214v-3.901v-4.27v-13.093c0-9.452,3.461-18.903,9.452-26.157l5.985-6.924 c2.528-3.15,4.104-7.237,4.104-11.339V44.53V22.918v-4.275h28.32v4.275V44.53v43.287c0,4.086,1.576,8.188,4.106,11.339l5.988,6.925 c5.986,7.252,9.451,16.704,9.451,26.156V145.001z"/><path d="M41.23,183.077h-2.532v3.094l3.749-2.998c-0.126,0-0.312-0.016-0.562-0.049C41.636,183.093,41.417,183.077,41.23,183.077z"/><path d="M49.57,185.326v0.092c0,2.251-0.749,3.971-2.247,5.155c-1.5,1.188-3.501,1.782-5.999,1.782h-2.626v5.436h-5.247v-4.966 l-14.622,11.62l21.088,7.03l22.026-7.309v-33.929l-13.777,10.964C49.103,182.266,49.57,183.64,49.57,185.326z"/><path d="M44.229,185.609c0-0.5-0.095-0.876-0.281-1.127l-4.686,3.656h1.875C43.198,188.138,44.229,187.294,44.229,185.609z"/></g></svg></div>'
   var loadback = document.getElementById('loadback');
   window.setTimeout(fadeIn, 0);
};

function fadeIn() {
   //$('body').css('top', -(document.documentElement.scrollTop) + 'px').addClass('noscroll');
   loadback.classList.add("loadin");
   bottleClip = document.getElementById("bottleClip");
   bottleClip.setAttribute("y", 3.294);
}

function fadeOut() {
   loadback.classList.remove("loadin");
}

function divInject() {
   document.body.innerHTML += '<svg version="1.1" id="gogglesMain" style="position:fixed;z-index:1001" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600px" height="280px" viewBox="0 0 317.361 139.413" enable-background="new 0 0 317.361 139.413" xml:space="preserve"> <g><path fill="#231F20" d="M247.654,7c34.577,0,62.707,28.13,62.707,62.707s-28.13,62.707-62.707,62.707 c-33.396,0-45.216-21.782-52.278-34.797l-0.533-0.982c-4.753-8.73-15.883-29.175-36.162-29.175 c-20.277,0-31.006,19.705-36.162,29.175l-0.534,0.983c-7.062,13.014-18.882,34.796-52.277,34.796C35.13,132.413,7,104.283,7,69.707 S35.13,7,69.707,7h78.683h20.582H247.654 M247.654,0c-13.343,0-49.901,0-78.683,0c-5.938,0-12.993,0-20.582,0 c-28.781,0-65.34,0-78.683,0C31.208,0,0,31.208,0,69.707c0,38.498,31.208,69.707,69.707,69.707s51.866-26.404,58.959-39.433 c5.621-10.324,14.696-25.522,30.014-25.522c15.182,0,24.394,15.198,30.014,25.522c7.094,13.028,20.462,39.433,58.96,39.433 c38.499,0,69.707-31.209,69.707-69.707C317.361,31.208,286.153,0,247.654,0L247.654,0z"/><clipPath id="svgPath"><path id="clipPath" fill="000" stroke="#231F20" stroke-miterlimit="10" d="M247.654,0c-13.343,0-49.901,0-78.683,0c-5.938,0-12.993,0-20.582,0 c-28.781,0-65.34,0-78.683,0C31.208,0,0,31.208,0,69.707c0,38.498,31.208,69.707,69.707,69.707s51.866-26.404,58.959-39.433 c5.621-10.324,14.696-25.522,30.014-25.522c15.182,0,24.394,15.198,30.014,25.522c7.094,13.028,20.462,39.433,58.96,39.433 c38.499,0,69.707-31.209,69.707-69.707C317.361,31.208,286.153,0,247.654,0L247.654,0z"/></clipPath></g></svg>';

   document.body.innerHTML += '<div id="background" style="position:fixed;width:100vw;height:100vh;top:0;left:0;z-index:1000;-webkit-clip-path:url(#svgPath)"><img id="overlay" style="position:fixed;width:100%;height:100%;top:0px;left:0px;z-index:10"></div>';
   //strange things happen when trying to make these variables global----------------------*********************
   var clipPath = document.getElementById('clipPath');
   var clip = document.getElementById('svgPath');
   var goggles = document.getElementById('gogglesMain');
   var background = document.getElementById('background');
   var overlay = document.getElementById('overlay');
};

loadScreen();

divInject();

//detects when user starts and stops scrolling.
window.addEventListener('scroll', function () {
   if (loadDelay !== null) {
      clearTimeout(loadDelay);
      console.log("delaying")
      gogglesMain.style.display = "none";
      document.getElementById("background").style.display = "none";
   }
   loadDelay = setTimeout(function () {
      window.setTimeout(reload, 50);
   }, 700);
}, false);

//sends out a message to background.js that returns the Data URL to the screenshot
function imgRequest(input) {
   console.log("imgRequest(" + input + ")");
   chrome.runtime.sendMessage({
      hail: input
   }, function (response) {
      fadeIn();
      window.setTimeout(function () {
         image = response.output; //stores data url in image
         console.log("sendMessage returns " + response.output);
         setImage(image);
      }, 100);
   });
};

imgRequest("init");

//applies the screenshot to #background src
function setImage(image) {
   overlay.src = image;
   console.log(overlay.style.width);
   detectFace();
   gogglesMain.style.display = "block";
   document.getElementById("background").style.display = "block";
};

//passes background image into facial detection
function detectFace() {
   $('#overlay').faceDetection({
      complete: function (facePre) {
         if (setDetect == true){
            faces = facePre;
            facenum = faces.length
         }
         count = 0;
         //faceloop();
         for(i = 0; i < facenum; i++){
            
            var face = faces[i];
            var faceX = face.x;
            var faceY = face.y;
            var faceHeight = face.height;
            var faceWidth = face.width;
            faceX = faceX - faceWidth;
            faceY = faceY - faceHeight;
            //creates bottle loading animation
            //var bottleLoad = (((i+1)*100/facenum)*2.8) + 3;
            //console.log(bottleLoad);
            
            faceImage = chrome.extension.getURL("face"+ Math.floor((Math.random() * 5) + 1)+ ".png");
            background.innerHTML += '<img src="'+faceImage+'" class="face" style="position:fixed;height:'+ faceHeight * 3+'px;width:'+ faceWidth * 3+'px;z-index:400;left:' + faceX + 'px;top:'+ faceY +'px;">';
                           
            if(i + 1 == faces.length){
               $({someValue: 3.5}).animate({someValue: 280}, {
                   duration: 1200,
                   step: function() { 
                       bottleClip.setAttribute("y", this.someValue);
                   }
               });
               window.setTimeout(fadeOut, 1400);
            }
         }
      }
   });
};


//clears dom and dataurl for new screenshot
function reload() {
   overlay.src = " ";
   $('.face').remove();
   console.log("overlay.src is now null");
   imgRequest("refresh");
};

function faceloop() {
   console.log(faces);
   setDetect = false;
   i = count;
   count++;
   face = faces[i];
   var faceX = face.x;
   var faceY = face.y;
   var faceHeight = face.height;
   var faceWidth = face.width;
   faceX = faceX - faceWidth;
   faceY = faceY - faceHeight;
   //creates bottle loading animation
   /*var bottleLoad = (((i + 1) * 100 / facenum) * 2.8) + 3;
   console.log(bottleLoad);*/
   faceImage = chrome.extension.getURL("face"+ Math.floor((Math.random() * 5) + 1)+ ".png");
   console.log ("stff");
   background.innerHTML += '<img src="' + faceImage + '" class="face" style="position:fixed;height:' + faceHeight * 3 + 'px;width:' + faceWidth * 3 + 'px;z-index:400;left:' + faceX + 'px;top:' + faceY + 'px;">';

   if (i + 1 >= faces.length) {
      window.setTimeout(fadeOut, 800);
      count = 0;
      facenum = 0;
      setDetect = true;
   } else {
      //bottleClip.setAttribute("y", bottleLoad);
      window.requestAnimationFrame(faceloop());
   }
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
   clipPath.setAttribute("transform", "translate(" + (mouse.x - 290) + "," + (mouse.y + mouseScroll) + ") scale(1.83,1.83)");
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