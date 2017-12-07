import {
  GOWN,
  Container,
  autoDetectRenderer,
  loader,
  windowHeight,
  windowWidth
} from '@/constants';

import stage from '@/components/stage'
import scene from '@/components/scene'
import TWEEN from '@tweenjs/tween.js'

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
  renderer.resize(windowWidth, windowHeight);

  gameLoop();
}

function animate(time) {
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

function gameLoop() {
  //Loop this function 60 times per second
  requestAnimationFrame(gameLoop);
  
  TWEEN.update();
  //Update the current game state
  state();

  //Render the stage
  renderer.render(stage);
}

function play() {
  // stage.x += 1
}
