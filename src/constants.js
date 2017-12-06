const PIXI = require('pixi.js');

const Container = PIXI.Container,
  autoDetectRenderer = PIXI.autoDetectRenderer,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  TextureCache = PIXI.utils.TextureCache,
  Texture = PIXI.Texture,
  Sprite = PIXI.Sprite,
  Text = PIXI.Text,
  Graphics = PIXI.Graphics;

const windowHeight = window.innerHeight,
  windowWidth = window.innerWidth;

export {
  Container, autoDetectRenderer, loader, resources, TextureCache, Texture, Sprite, Text, Graphics, windowHeight, windowWidth
}