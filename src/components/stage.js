import {
  Container,
  loader,
  ScrollContainer,
  Sprite,
  resources,
  windowHeight,
  windowWidth,
  NaviSlideDistance
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

  stage.event()
  stage.addChild(scene, widgets, navigation)
}

stage.event = function () {
  let cache = null;

  let isTopContent = false;
  let isBottomContent = false;

  this.interactive = true;
  /**
   * 
   * @param {*} o 
   * @param {*} n 
   * @returns Number 2,4,6,8,5
   */
  const isSlide = (o, n) => {
    if (n.timestamp - o.timestamp < 600) {
      const X = n.x - o.x;
      const Y = n.y - o.y;
      if (Math.abs(X) > Math.abs(Y) && X > NaviSlideDistance) {
        return 6
      }
      else if (Math.abs(X) > Math.abs(Y) && X < -NaviSlideDistance) {
        return 4
      }
      else if (Math.abs(Y) > Math.abs(X) && Y > NaviSlideDistance) {
        return 2
      }
      else if (Math.abs(Y) > Math.abs(X) && Y < -NaviSlideDistance) {
        return 8
      }
      else {
        return 5
      }
    }
    return false
  }

  const copyAddtimeStamp = (origin) => {
    let result = Object.assign({}, origin)
    result.timestamp = Date.now()
    return result
  }
  this.on('touchstart', (ev) => {
    cache = copyAddtimeStamp(ev.data.global)
  })

  this.on('touchend', (ev) => {
    let o = cache;
    let n = copyAddtimeStamp(ev.data.global);
    let direction = isSlide(o, n)
    if (direction) {
      let visible = navigation.visible
      if (direction === 8) {
        navigation.slide('up')
      } else if (direction === 2) {
        navigation.slide('down')
      }
    }
    cache = null
    isTopContent = isBottomContent = false
  })




}

export default stage