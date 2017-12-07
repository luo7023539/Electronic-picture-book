const PIXI = require('pixi.js');
const GOWN = require('gown')

const { ScrollContainer, LayoutGroup, layout } = GOWN

const { Container, autoDetectRenderer, loader, Texture, Sprite, Text, utils, Graphics } = PIXI;

const resources = loader.resources,
  TextureCache = utils.TextureCache;


const windowHeight = window.innerHeight,
  windowWidth = window.innerWidth;

const screenScaleRito = windowWidth / 1024;
export {
  PIXI, GOWN, Container, autoDetectRenderer, loader, resources, TextureCache, Texture, Sprite, Text, Graphics, windowHeight, windowWidth, ScrollContainer, LayoutGroup, layout, screenScaleRito
}