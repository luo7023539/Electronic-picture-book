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

  pause.visible = false

  const playing = () => {
    pause.visible = true
    start.visible = false
  }

  const stopping = () => {
    pause.visible = false
    start.visible = true
  }

  this.showPlaying = playing
  this.showPause = stopping


  const handleLeft = (ev) => {
    console.log(ev);
    scene.current--
  }

  const handleRight = (ev) => {
    scene.current++
  }

  const handleStart = (ev) => {
    const current_scene = scene._current_scene
    playing()
    current_scene.play()
  }

  const handlePause = (ev) => {
    const current_scene = scene._current_scene
    stopping()
    current_scene.stop()
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

  start.buttonMode = true;
  start.interactive = true;
  start
    .on('touchend', handleStart)

  pause.buttonMode = true;
  pause.interactive = true;
  pause
    .on('touchend', handlePause)
  widgets.interactive = true;
  widgets.on('touchend', (ev) => {
    ev.stopped = true;
  })
  widgets.addChild(buttonLeft, start, pause, buttonRight)
}

export default widgets
