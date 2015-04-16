//image = chrome.extension.getURL("people.jpg"); 

//add div and goggle img to body tag of DOM
document.body.innerHTML += '<svg version="1.1" id="gogglesMain" style="position:fixed;z-index:501" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600px" height="280px" viewBox="0 0 317.361 139.413" enable-background="new 0 0 317.361 139.413" xml:space="preserve"> <g><path fill="#231F20" d="M247.654,7c34.577,0,62.707,28.13,62.707,62.707s-28.13,62.707-62.707,62.707 c-33.396,0-45.216-21.782-52.278-34.797l-0.533-0.982c-4.753-8.73-15.883-29.175-36.162-29.175 c-20.277,0-31.006,19.705-36.162,29.175l-0.534,0.983c-7.062,13.014-18.882,34.796-52.277,34.796C35.13,132.413,7,104.283,7,69.707 S35.13,7,69.707,7h78.683h20.582H247.654 M247.654,0c-13.343,0-49.901,0-78.683,0c-5.938,0-12.993,0-20.582,0 c-28.781,0-65.34,0-78.683,0C31.208,0,0,31.208,0,69.707c0,38.498,31.208,69.707,69.707,69.707s51.866-26.404,58.959-39.433 c5.621-10.324,14.696-25.522,30.014-25.522c15.182,0,24.394,15.198,30.014,25.522c7.094,13.028,20.462,39.433,58.96,39.433 c38.499,0,69.707-31.209,69.707-69.707C317.361,31.208,286.153,0,247.654,0L247.654,0z"/><clipPath id="svgPath"><path id="clipPath" fill="000" stroke="#231F20" stroke-miterlimit="10" d="M247.654,0c-13.343,0-49.901,0-78.683,0c-5.938,0-12.993,0-20.582,0 c-28.781,0-65.34,0-78.683,0C31.208,0,0,31.208,0,69.707c0,38.498,31.208,69.707,69.707,69.707s51.866-26.404,58.959-39.433 c5.621-10.324,14.696-25.522,30.014-25.522c15.182,0,24.394,15.198,30.014,25.522c7.094,13.028,20.462,39.433,58.96,39.433 c38.499,0,69.707-31.209,69.707-69.707C317.361,31.208,286.153,0,247.654,0L247.654,0z"/></clipPath></g></svg>';

document.body.innerHTML += '<img id="background" style="position:fixed;width:100vw;height:100vh;top:0;left:0;z-index:500;-webkit-clip-path:url(#svgPath)"/>';

var body = document.getElementsByTagName('body');
var clipPath = document.getElementById('clipPath');
var clip = document.getElementById('svgPath');
var goggles = document.getElementById('gogglesMain');
var background = document.getElementById('background');
var image;

//sends out a message to background.js that returns the Data URL to the screenshot
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
   image = response.output; //stores data url in image
   setImage(image); 
   
});

//applies the screenshot to #background src
function setImage(image){
   background.src = image;
   detectFace();
};

//passes background image into facial detection
function detectFace(){
   background.faceDetection({
        complete: function (faces) {
            console.log(faces);
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