faceImage = chrome.extension.getURL("face.png");
//logo = chrome.extension.getURL("logo.svg");
var image;
var body = document.getElementsByTagName('body');


//add div and goggle img to body tag of DOM
function loadScreen(){
   document.body.innerHTML += '<style>.loadin{opacity:0.95 !important}</style>'
   document.body.innerHTML += '<div id="loadback" class="" style="position:fixed; width:100vw;height:100vh;left:0px;top:0px;background-color:#fff;opacity:0;z-index:1010;transition:opacity 300ms;"><svg style="position:absolute;margin-top:-51.7665;top:50%;margin-left:-53.8705;left:50%" version="1.1" x="0px" y="0px" width="107.741px" height="103.533px" viewBox="0 0 107.741 103.533" enable-background="new 0 0 107.741 103.533" xml:space="preserve"><path fill="#231F20" d="M107.741 0v85.646l-53.871 17.888L0 85.646V0H107.741z M4.419 79.333l34.932-27.776V25.042h18.308 c4.488 0 8.3 1 11.4 2.946L98.693 4.419H4.419V79.333z M103.323 6.313L72.389 30.934c2.104 2.4 3.2 5.5 3.2 9.3 v0.21c0 5.05-1.684 8.911-5.05 11.573c-3.367 2.668-7.858 3.999-13.468 3.999h-5.893v12.205H39.351V57.027L6.523 83.1 l47.347 15.783l49.453-16.414V6.313z M59.553 35.353c-0.283 0-0.704-0.033-1.263-0.105c-0.562-0.068-1.052-0.105-1.473-0.105 h-5.682v6.944L59.553 35.353z M62.919 38.299l-10.521 8.207h4.209c4.629 0 6.944-1.894 6.944-5.682 C63.551 39.7 63.3 38.9 62.9 38.299z"/></svg></div>'
   var loadback = document.getElementById('loadback');
   window.setTimeout(fadeIn, 1);
};

function fadeIn(){
   loadback.classList.add("loadin");
}

function fadeOut(){
   console.log("fade out");
   loadback.classList.remove("loadin");
}

function divInject(){
   document.body.innerHTML += '<svg version="1.1" id="gogglesMain" style="position:fixed;z-index:1001" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600px" height="280px" viewBox="0 0 317.361 139.413" enable-background="new 0 0 317.361 139.413" xml:space="preserve"> <g><path fill="#231F20" d="M247.654,7c34.577,0,62.707,28.13,62.707,62.707s-28.13,62.707-62.707,62.707 c-33.396,0-45.216-21.782-52.278-34.797l-0.533-0.982c-4.753-8.73-15.883-29.175-36.162-29.175 c-20.277,0-31.006,19.705-36.162,29.175l-0.534,0.983c-7.062,13.014-18.882,34.796-52.277,34.796C35.13,132.413,7,104.283,7,69.707 S35.13,7,69.707,7h78.683h20.582H247.654 M247.654,0c-13.343,0-49.901,0-78.683,0c-5.938,0-12.993,0-20.582,0 c-28.781,0-65.34,0-78.683,0C31.208,0,0,31.208,0,69.707c0,38.498,31.208,69.707,69.707,69.707s51.866-26.404,58.959-39.433 c5.621-10.324,14.696-25.522,30.014-25.522c15.182,0,24.394,15.198,30.014,25.522c7.094,13.028,20.462,39.433,58.96,39.433 c38.499,0,69.707-31.209,69.707-69.707C317.361,31.208,286.153,0,247.654,0L247.654,0z"/><clipPath id="svgPath"><path id="clipPath" fill="000" stroke="#231F20" stroke-miterlimit="10" d="M247.654,0c-13.343,0-49.901,0-78.683,0c-5.938,0-12.993,0-20.582,0 c-28.781,0-65.34,0-78.683,0C31.208,0,0,31.208,0,69.707c0,38.498,31.208,69.707,69.707,69.707s51.866-26.404,58.959-39.433 c5.621-10.324,14.696-25.522,30.014-25.522c15.182,0,24.394,15.198,30.014,25.522c7.094,13.028,20.462,39.433,58.96,39.433 c38.499,0,69.707-31.209,69.707-69.707C317.361,31.208,286.153,0,247.654,0L247.654,0z"/></clipPath></g></svg>';

   document.body.innerHTML += '<div id="background" style="position:fixed;width:100vw;height:100vh;top:0;left:0;z-index:1000;-webkit-clip-path:url(#svgPath)"><img id="overlay" style="position:fixed;width:100%;height:100%;top:0px;left:0px;z-index:10"></div>';
   var clipPath = document.getElementById('clipPath');
   var clip = document.getElementById('svgPath');
   var goggles = document.getElementById('gogglesMain');
   var background = document.getElementById('background');
   var overlay = document.getElementById('overlay');
};

loadScreen();

divInject();

//sends out a message to background.js that returns the Data URL to the screenshot
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
   image = response.output; //stores data url in image
   setImage(image); 
   
});

//applies the screenshot to #background src
function setImage(image){
   overlay.src = image;
   detectFace();
};

//passes background image into facial detection
function detectFace(){
   $('#overlay').faceDetection({
        complete: function (faces) {
            for(i = 0; i < faces.length; i++){
               //console.log(faces[i].x + " " + faces[i].y);
               
               var face = faces[i];
               var faceX = face.x;
               var faceY = face.y;
               var faceHeight = face.height;
               var faceWidth = face.width;
               faceX = faceX - faceWidth;
               faceY = faceY - faceHeight;
               
               background.innerHTML += '<img src="'+faceImage+'" class="face" style="position:fixed;height:'+ faceHeight * 3+'px;width:'+ faceWidth * 3+'px;z-index:400;left:' + faceX + 'px;top:'+ faceY +'px;">';
                              
               if(i + 1 == faces.length){
                  window.setTimeout(fadeOut, 1000);
               }
            }
        }
    });
};

//$('#background').css("opacity", 0);

//hide cursor
document.body.style.cursor = 'none';


var mouse = {x:100, y:100};

//mouse listener to move goggles
document.addEventListener('mousemove', mouseListen, false);

function mouseListen(e){ 
   mouse.x = e.clientX || e.pageX; 
   mouse.y = e.clientY || e.pageY;
   gogglesMain.style.left = mouse.x - 300 + "px";
   gogglesMain.style.top = mouse.y - 100 + "px";
   clipPath.setAttribute("transform", "translate("+(mouse.x -290)+","+(mouse.y - 90)+") scale(1.83,1.83)");
   
   
//figuring out repaint actions
   //background.style.webkitClipPath = "url('#svgPath1')"      
}

//esc key cancels most events
document.onkeydown = function goggleDisable(e){
   esc = e.keyCode;
   if ( esc == 27){
      document.removeEventListener('mousemove', mouseListen,false);
      document.body.style.cursor = 'auto';
      
      var exist = document.getElementById('background');
      
      if (!!exist == true){
         document.getElementById('background').remove();
         document.getElementById('gogglesMain').remove();
      }
   }
};



/*window.requestAnimationFrame(frame);

function frame(){
   document.getElementById("background").remove();
   
   document.body.innerHTML += '<div id="background" style="position:fixed;width:100vw;height:100vh;top:0;left:0;z-index:500;background-color:#000;opacity:0.3;-webkit-clip-path: url(#svgPath)"></div>';
   
   window.requestAnimationFrame(frame);
};*/