import {
  Container,
  ScrollContainer,
  LayoutGroup,
  layout,
  Sprite,
  resources,
  windowHeight,
  windowWidth,
  screenScaleRito,
  TWEEN
} from '@/constants';

import scene from '@/components/scene'
const navigation = new Container()

navigation.init = function () {
  const originX = 50 * screenScaleRito, originY = 5 * screenScaleRito, width = 130 * screenScaleRito, height = 130 * screenScaleRito, gap = 20 * screenScaleRito;
  const RES = resources['assets/navigation.json'].textures
  const wrap = new Sprite(RES['navigation.png'])

  wrap.scale.set(screenScaleRito, screenScaleRito)
  const Thumbnails = new ScrollContainer();
  const layoutGroup = new LayoutGroup();
  layoutGroup.layout = new layout.HorizontalLayout();
  layoutGroup.layout.gap = gap
  Thumbnails.x = originX
  Thumbnails.y = originY
  Thumbnails.viewPort = layoutGroup
  Thumbnails.height = wrap.height;
  Thumbnails.width = wrap.width - 105 * screenScaleRito;

  for (let i = 0; i < 16; i++) {
    const _Thumbnails = new Sprite(RES['1.jpg'])
    _Thumbnails._to = i
    _Thumbnails.height = width
    _Thumbnails.width = height
    _Thumbnails.interactive = true
    _Thumbnails.buttonMode = true
    layoutGroup.addChild(_Thumbnails)
  }
  this.event()
  this.wrap = wrap
  this.Thumbnails = Thumbnails
  navigation.addChild(wrap, Thumbnails)
}

navigation.event = function () {
  let cache = null;
  this.interactive = true
  this
    .on('touchstart', ev => {
      // ev.stopped = true
      cache = Object.assign({}, ev.data.global)
    })
    .on('touchend', ev => {
      // ev.stopped = true
      const target = ev.target
      if (target.pluginName === 'sprite') {
        let posi = ev.data.global;
        if (Math.abs(posi.x - cache.x) < 15 && Math.abs(posi.y - cache.y) < 15) {
          scene.current = ev.target._to
        }
      }
    })
}

navigation.slide = function (to) {
  const nH = this.height
  const start= this.position
  new TWEEN.Tween(start)
    .to({
      y: to === 'up' ? -nH : 0
    }, 300)
    .start();
}

export default navigation
