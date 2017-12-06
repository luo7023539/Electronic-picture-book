import {
  Container,
  loader,
  Sprite,
  resources,
  windowHeight,
  windowWidth
} from '@/constants';

import stage from './stage'
import * as scenes from './scenes'
import TWEEN from '@tweenjs/tween.js'


const scene = new Container()

// 加载控件
scene.init = function () {
  // 初始化场景
  // 索引
  this._current = 0;
  this._setup()
  this._defineProperty()
}

scene._defineProperty = function () {
  Object.defineProperty(this, 'current', {
    enumerable: true,
    configurable: true,
    get() {
      return this._current
    },
    set(newValue) {
      const duration = 1000;
      const to = -windowWidth * newValue;
      let start = this.position;
      this._current = newValue
      new TWEEN.Tween(start)
        .to({ x: to }, duration)
        .easing(TWEEN.Easing.Quadratic.Out)
        .start();
    }
  })
}
// 将所有场景加入scene中

scene._setup = function () {
  const keys = Object.keys(scenes)
  keys.forEach((item, idx) => {
    const _scene = scenes[item]
    _scene.x = -windowWidth * idx
    _scene.init && _scene.init()
    this.addChild(_scene)
  })
}

export default scene 
