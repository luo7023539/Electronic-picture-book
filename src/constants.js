import TWEEN from '@tweenjs/tween.js'
import Charm from './assets/Charm'
const PIXI = require('pixi.js')
const GOWN = require('gown')
const c = new Charm(PIXI)


const { ScrollContainer, LayoutGroup, layout } = GOWN

const { Container, autoDetectRenderer, loader, Texture, Sprite, Text, utils, Graphics } = PIXI;

const resources = loader.resources,
  TextureCache = utils.TextureCache;


let windowHeight = window.innerHeight,
  windowWidth = window.innerWidth;

let screenScaleRitoX = windowWidth / 1024;
let screenScaleRitoY = windowHeight / 768;

const NaviSlideDistance = 50;

const getTexture = (textureName) => {
  return resources['assets/scenes-0.json'].textures[textureName] || resources['assets/scenes-1.json'].textures[textureName]
}

function detectOrient() {
  var storage = localStorage; // 不一定要使用localStorage，其他存储数据的手段都可以
  var data = storage.getItem('J-recordOrientX');
  var cw = document.documentElement.clientWidth;
  var _Width = 0,
    _Height = 0;
  if (!data) {
    var sw = window.screen.width;
    var sh = window.screen.height;
    // 2.在某些机型（如华为P9）下出现 screen.width/height 值交换，所以进行大小值比较判断
    _Width = sw < sh ? sw : sh;
    _Height = sw >= sh ? sw : sh;
    storage.setItem('J-recordOrientX', _Width + ',' + _Height);
  } else {
    var str = data.split(',');
    _Width = str[0];
    _Height = str[1];
  }
  if (cw == _Width) {
    // 竖屏
    return 'portrait';
  }
  if (cw == _Height) {
    // 横屏
    return 'landscape';
  }
}

window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
  /**
   * 锁定横屏
   */
  console.log(detectOrient());
}, false);


export {
  PIXI, GOWN, TWEEN, Container, autoDetectRenderer, loader, resources, TextureCache, Texture, Sprite, Text, Graphics, windowHeight, windowWidth, ScrollContainer, LayoutGroup, layout, screenScaleRitoX, screenScaleRitoY, getTexture,
  NaviSlideDistance,c
}