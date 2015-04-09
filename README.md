Beer Googles
=================

Overview
============
Create a chrome extention that allows you to don a pair of virtual beer goggles and view the web through hazy eyes.

Steps
===========

-1 create chrome extention

-2 overlay goggles when extention enabled

-3 draggable goggles

-4 screengrab the page (chrome.desktopCapture API)

-5 facial recognition API

-6 overlay detected face w placeholder (pink/blue by gender)

-7 replace placeholder w pngs of better faces

optional tasks
--------------
Render fast enough for video


Notes
=============

manifest.json
-------------
first file chrome opens when loading extension. 

points to all files

"background" js files are loaded automatically, not run on DOM

background.js
------------
loaded automatically, runs on browser, but does not affect DOM

chrome.tabs.executeScript: loads main.js that affects DOM

chrome.extension.getURL(string path) : loads resources on extention

main.js
-------
these files affect DOM, inserts div with document.body.innerHTML


chrome.tabs.captureVisibleTab
----------------------------

^ method that creates data URL that holds image.
 
Task: Take data URL and set as img tag src to create image.
 
setting img src done in js file seperate from background.js

Todo
===============

-(done)find out how to point browser to image file stored in extension

-(done)create seperate html to load img?

-(done)web_accessible_resources: put in manifest to make img accessible to DOM

-(done)create SVG clipping mask of goggles to static image

-repaint svg clipping mask on mouse move

-(failed)on request animation frame, delete background, repaint