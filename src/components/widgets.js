import {
  Container,
  loader,
  Sprite,
  resources,
  windowHeight,
  windowWidth
} from '@/constants';

import scene from '../scene'
const widgets = new Container()

widgets.init = function () {
  const RES = resources['assets/widget.json'].textures
  const start = new Sprite(RES['start.png'])
  const pause = new Sprite(RES['pause.png'])
  const buttonLeft = new Sprite(RES['left.png'])
  const buttonRight = new Sprite(RES['right.png'])


  start.x = 204
  pause.x = 204

  const handleLeft = () => {
    scene.current--
  }

  const handleRight = () => {
    scene.current++
  }

  buttonLeft.buttonMode = true;
  buttonLeft.interactive = true;
  buttonLeft
    .on('pointerdown', handleLeft)

  buttonRight.buttonMode = true;
  buttonRight.interactive = true;
  buttonRight.x = 408;
  buttonRight
    .on('pointerdown', handleRight)


  widgets.addChild(buttonLeft, start, pause, buttonRight)
}

export default widgets
