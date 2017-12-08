import TWEEN from '@tweenjs/tween.js'
const PIXI = require('pixi.js');
const GOWN = require('gown')


const { ScrollContainer, LayoutGroup, layout } = GOWN

const { Container, autoDetectRenderer, loader, Texture, Sprite, Text, utils, Graphics } = PIXI;

const resources = loader.resources,
  TextureCache = utils.TextureCache;


const windowHeight = window.innerHeight,
  windowWidth = window.innerWidth;

const screenScaleRito = windowWidth / 1024;
const NaviSlideDistance = 50;
const getTexture = (textureName) => {
  return resources['assets/scenes-0.json'].textures[textureName] || resources['assets/scenes-1.json'].textures[textureName]
}


export {
  PIXI, GOWN, TWEEN,Container, autoDetectRenderer, loader, resources, TextureCache, Texture, Sprite, Text, Graphics, windowHeight, windowWidth, ScrollContainer, LayoutGroup, layout, screenScaleRito,getTexture,
  NaviSlideDistance
}