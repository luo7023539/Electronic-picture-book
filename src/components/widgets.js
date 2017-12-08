import {
  Container,
  loader,
  Sprite,
  resources,
  windowHeight,
  windowWidth
} from '@/constants';

import scene from '@/components/scene'
const widgets = new Container()

widgets.init = function () {
  const RES = resources['assets/widget.json'].textures
  const start = new Sprite(RES['start.png'])
  const pause = new Sprite(RES['pause.png'])
  const buttonLeft = new Sprite(RES['left.png'])
  const buttonRight = new Sprite(RES['right.png'])


  start.x = 204
  pause.x = 204

  const handleLeft = (ev) => {
    console.log(ev);
    scene.current--
  }

  const handleRight = (ev) => {
    scene.current++
  }

  buttonLeft.buttonMode = true;
  buttonLeft.interactive = true;
  buttonLeft
    .on('touchend', handleLeft)

  buttonRight.buttonMode = true;
  buttonRight.interactive = true;
  buttonRight.x = 408;
  buttonRight
    .on('touchend', handleRight)

  widgets.interactive = true;
  widgets.on('touchend', (ev) => {
    ev.stopped = true;
  })
  widgets.addChild(buttonLeft, start, pause, buttonRight)
}

export default widgets
