import {
  Container,
  loader,
  Sprite,
  resources,
  windowHeight,
  windowWidth
} from '@/constants';

import scene from './scene'
import TWEEN from '@tweenjs/tween.js'

const stage = new Container()

// 加载控件
stage.init = () => {
  const buttonLeft = new Sprite(resources['assets/cat.png'].texture)
  const buttonRight = new Sprite(resources['assets/cat.png'].texture)

  const handleLeft = () => {
    scene.current--
  }

  const handleRight = () => {
    scene.current++
  }

  buttonLeft.buttonMode = true;
  buttonLeft.interactive = true;
  buttonLeft.x = 50;
  buttonLeft.y = windowHeight - 100
  buttonLeft
    .on('pointerdown', handleLeft)

  buttonRight.buttonMode = true;
  buttonRight.interactive = true;
  buttonRight.x = windowWidth - 110;
  buttonRight.y = windowHeight - 100
  buttonRight
    .on('pointerdown', handleRight)

  scene.init()
  stage.addChild(buttonLeft, buttonRight, scene)
}

export default stage 
