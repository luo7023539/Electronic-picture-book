import {
  Container,
  loader,
  Sprite,
  resources,
  windowWidth,
  screenScaleRitoX,
  screenScaleRitoY,
  c
} from '@/constants';

import stage from '@/components/stage'
import * as scenes from '@/scenes'
import TWEEN from '@tweenjs/tween.js'


const scene = new Container()
const MAX = Object.keys(scenes).length
// 加载控件
scene.init = function () {
  // 初始化场景
  // 索引
  this._current = 0
  this._current_scene = null
  this._scenes = []
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
      if (newValue < 0 || newValue > MAX - 1)
        return;
      const duration = 1024;
      const to = -windowWidth * newValue;
      let start = this.position;
      this._current = newValue
      this._current_scene = this._scenes[newValue]
      new TWEEN.Tween(start)
        .to({ x: to }, duration)
        .easing(TWEEN.Easing.Quadratic.In)
        .start();
    }
  })
}
// 将所有场景加入scene中

scene._setup = function () {
  const keys = Object.keys(scenes)
  keys.forEach((item, idx) => {
    const _scene = scenes[item]
    _scene.x = windowWidth * idx
    _scene.scale.set(screenScaleRitoX, screenScaleRitoY)
    _scene.init && _scene.init()
    this._scenes.push(_scene)
    this.addChild(_scene)

    /**
     * Handle Quene OnComplete
     */

    
  })
  
  /**
   * 未知BUG
   * 需要初始化至第10页
   * 否则滚动容器不可见
   * 2018.3.5
   */
  scene.x = -9 * windowWidth

  window.setTimeout(() => {
    this.x = -0 * windowWidth
    this._current_scene = this._scenes[0]
  }, 0)
}

export default scene 
