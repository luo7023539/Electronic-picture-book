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
const screenScaleRito = windowWidth / 1024

const renderer = autoDetectRenderer(windowWidth, windowHeight);
document.body.appendChild(renderer.view);


new GOWN.ThemeParser("assets/shapes_desktop.json")

loader
  .add("assets/widget.json")
  .add("assets/navigation.json")
  .add("assets/scenes-0.json")
  .add("assets/scenes-1.json")
  .add("scenes/cat.json")
  .load(setup);


let gameScene, state;
//Define variables that might be used in more 
//than one function

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

