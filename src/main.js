import {
  Container,
  autoDetectRenderer,
  loader,
  windowHeight,
  windowWidth
} from '@/constants';

import stage from './stage'
import scene from './scene'
import TWEEN from '@tweenjs/tween.js'

//Create a Pixi stage and renderer and add the 
//renderer.view to the DOM
const renderer = autoDetectRenderer(windowWidth, windowHeight);
document.body.appendChild(renderer.view);

const preload = new Array(2).fill(0).map((i, idx) => `assets/${++idx}.json`)

loader
  .add("assets/widget.json")
  .add(preload)
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
