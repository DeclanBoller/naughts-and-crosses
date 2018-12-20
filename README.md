# Tic Tac Toe Game

### Introduction

General Assembly Project 0 is the first attempt at a solo project that implements HTML5, CSS, Javascript/JQuery and any other libraries or frameworks that may be valuable in the project. 

My focus was to build a clean, working, responsive version of this game that executes code simply and efficiently - Readabilty and extensibility were important factors also. 

On inspection of the code one will see two (2) main files called ui.js && logic.js. The logic.js file contains all functions/arrays and objects that are required for the game to operate, each function has a note with what it does or an explanation. The ui.js contains the click handlers and executes the code in the logic.js file.


* To view the game in its current format as of 21/12/2018, please visit:
https://declanboller.github.io/naughts-and-crosses/

## 

### Technical Requirements

* Render a game board in the browser
* Switch turns between X and O (or whichever markers you select)
* Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
* Include separate HTML / CSS / JavaScript files
* Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
* Use Javascript for DOM manipulation
* Deploy your game online, where the rest of the world can access it
* Use semantic markup for HTML and CSS (adhere to best practices)


* For a full description of the project requirements, please visit:
https://gist.github.com/wofockham/8e959d5cfe7d120f1157

## 

### Built With
* Vanilla Javascript & JQuery (3.3.1)
* HTML5 / CSS3
* [PostCSS / Autoprefixer](https://github.com/postcss/autoprefixer)
* HTML Canvas 

## 

### Known Issues && Planned Fixes

Whilst the code has been made to be as robust as possible, with the implementation of the grid system some browser support is still being developed. As a result of this, at the time of build the known issues are as follows:
* Safari does not yet support intrinsic and extrinsic sizing with grid properties such as grid-template-rows


* IE 10/11 has partial support.

### Fixes for Known Issues
* The use of webkit and browser specific prefixes has shown reliabilty improvements on iOS Safari, however MS IE still has issues. 

## 

### Planned Changes & Updates

Currently the code is a simple PvP game, it is my intention to contine to develop the game and implement:
* Unbeatable AI
* LocalStorage for offline gameplay
* Support for multiplayer over a network

## 

### Acknowledgments
Canvas & Fireworks animation borrowed from [dtrooper](https://jsfiddle.net/user/dtrooper/fiddles/) on JSFiddle and modified by myself for use within this specific project. Changes were made to fit the canvas within a specified div instead of the whole page, and removed mouse tracking in favour of random explosions within the div itself.

## 

### Author

Built by and designed by [Declan Boller](https://github.com/DeclanBoller) as part of General Assembly WDI30 coursework, Project 0.

## 