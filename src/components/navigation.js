import {
  Container,
  ScrollContainer,
  LayoutGroup,
  layout,
  Sprite,
  resources,
  windowHeight,
  windowWidth,
  screenScaleRitoX,
  screenScaleRitoY,
  TWEEN,
  c
} from '@/constants';

import scene from '@/components/scene'
const navigation = new Container()

navigation.init = function () {
  const originX = 50 * screenScaleRitoX, originY = 5 * screenScaleRitoX, width = 130 * screenScaleRitoX, height = 130 * screenScaleRitoX, gap = 20 * screenScaleRitoX;
  const RES = resources['assets/navigation.json'].textures
  const wrap = new Sprite(RES['navigation.png'])

  wrap.scale.set(screenScaleRitoX, screenScaleRitoX)
  const Thumbnails = new ScrollContainer();
  const layoutGroup = new LayoutGroup();
  layoutGroup.layout = new layout.HorizontalLayout();
  layoutGroup.layout.gap = gap
  Thumbnails.x = originX
  Thumbnails.y = originY
  Thumbnails.viewPort = layoutGroup
  Thumbnails.height = wrap.height;
  Thumbnails.width = wrap.width - 105 * screenScaleRitoX;

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
  c.slide(navigation, 0, to === 'up' ? -this.height : 0)
}

export default navigation
