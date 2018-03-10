import {
  GOWN,
  Container,
  TWEEN,
  autoDetectRenderer,
  loader,
  windowHeight,
  windowWidth,
  c
} from '@/constants';

import stage from '@/components/stage'
import scene from '@/components/scene'

//Create a Pixi stage and renderer and add the 
//renderer.view to the DOM

const renderer = autoDetectRenderer(windowWidth, windowHeight);
document.body.appendChild(renderer.view);


new GOWN.ThemeParser("assets/shapes_desktop.json")

loader
  .add("assets/widget.json")
  .add("assets/navigation.json")
  .add("assets/record.json")
  .add([
    "assets/pic-0.json",
    "assets/pic-1.json"
  ])
  .add([
    "assets/1-0.json",
    "assets/1-1.json",
    "assets/1-2.json",
    "assets/1-3.json",
    "assets/1-4.json",
    "assets/1-5.json",
    "assets/1-6.json",
  ])
  .add("assets/2-0.json")
  .add([
    "assets/3-0.json",
    "assets/3-1.json",
    "assets/3-2.json",
    "assets/3-3.json",
    "assets/3-4.json",
  ])
  .add([
    "assets/4-0.json",
    "assets/4-1.json",
    "assets/4-2.json",
    "assets/4-3.json",
    "assets/4-4.json",
  ])
  .add([
    "assets/5-0.json",
    "assets/5-1.json",
    "assets/5-2.json",
    "assets/5-3.json",
  ])
  .add([
    "assets/6-0.json",
    "assets/6-1.json",
    "assets/6-2.json",
    "assets/6-3.json",
  ])
  .add([
    "assets/7-0.json",
  ])
  .add([
    "assets/8-0.json",
    "assets/8-1.json",
    "assets/8-2.json",
    "assets/8-3.json",
  ])
  .add([
    "assets/9-0.json",
  ])
  .add([
    "assets/10-1-0.json",
    "assets/10-2-0.json",
    "assets/10-2-1.json",
    "assets/10-3-0.json",
  ])
  .add([
    "assets/11-0.json",
    "assets/11-1.json",
  ])
  .add([
    "assets/12-0.json",
  ])
  .add([
    "assets/13-0.json",
    "assets/13-1.json",
  ])
  .add([
    "assets/14-0.json",
    "assets/14-1.json",
  ])
  .add([
    "assets/15-0.json",
    "assets/15-1.json",
    "assets/15-2.json",
    "assets/15-3.json",
  ])
  .on("progress", loadProgressHandler)
  .load(setup);


let gameScene, state;
//Define variables that might be used in more 
//than one function

function loadProgressHandler(loader, resource) {
  //Display the file `url` currently being loaded
  // console.log("loading: " + resource.url); 

  //Display the percentage of files currently loaded
  // console.log("progress: " + loader.progress + "%"); 

  //If you gave your files names as the first argument 
  //of the `add` method, you can access them like this
  //console.log("loading: " + resource.name);
}


function setup() {

  //Make the sprites and add them to the `gameScene`
  stage.init()
  //Create an alias for the texture atlas frame ids
  //Explorer

  //Make the blobs
  state = play;
  //Start the game loop

  gameLoop();
}


function gameLoop() {
  //Loop this function 60 times per second
  requestAnimationFrame(gameLoop);
  c.update()
  TWEEN.update();
  //Update the current game state
  state();

  //Render the stage
  renderer.render(stage);
}

function play() {
  // 
  // stage.x += 1
}

window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
  /**
   * 锁定横屏
   */
  console.log(window.innerWidth, window.innerHeight)
  console.log(windowWidth, windowHeight);
}, false);

