import {
  Container,
  loader,
  ScrollContainer,
  Sprite,
  resources,
  windowHeight,
  windowWidth
} from '@/constants';

import scene from '@/components/scene'
import navigation from '@/components/navigation'
import widgets from '@/components/widgets'

const stage = new Container()
// 加载控件
stage.init = () => {
  scene.init()
  widgets.init()

  widgets.x = (windowWidth - widgets.width) / 2
  widgets.y = windowHeight - widgets.height

  navigation.init()
  
  // navigation.x = (windowWidth - navigation.width) / 2
  // navigation.y = 0

  stage.addChild(scene, widgets, navigation)

  stage.interactive = true;
  
  stage.on('pointerdown', (ev) => {
    console.log('stage');
    console.log(ev);
  })

}

export default stage 
