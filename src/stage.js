import {
  Container,
  loader,
  Sprite,
  resources,
  windowHeight,
  windowWidth
} from '@/constants';

import scene from './scene'
import widgets from './components/widgets'

const stage = new Container()
// 加载控件
stage.init = () => {
  scene.init()
  widgets.init()

  widgets.x = (windowWidth - widgets.width) / 2
  widgets.y = windowHeight - widgets.height

  stage.addChild(scene, widgets)
}

export default stage 
