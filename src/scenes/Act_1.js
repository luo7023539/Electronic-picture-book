import {
  Container,
  Sprite,
  resources,
  windowWidth,
  windowHeight,
  getTexture
} from '@/constants'

const Act = new Container()
// 挂载一个初始化场景方法
Act.init = () => {
  console.log(resources);
  const background = new Sprite(getTexture('1/backgroud1.png'))

  background.width = windowWidth;
  background.height = windowHeight;
  Act.addChild(background)

  const RES = resources['scenes/cat.json'].textures;
  let explosionTextures = [...RES], i;

  for(let key in RES) {
    if (RES.hasOwnProperty(key)) {
      explosionTextures.push(RES[key])
    }
  }

  var explosion = new PIXI.extras.AnimatedSprite(explosionTextures);

  explosion.animationSpeed = .1
  explosion.play()

  Act.addChild(explosion)
}

export default Act