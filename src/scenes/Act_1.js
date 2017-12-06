import {
  Container,
  Sprite,
  resources,
  windowWidth,
  windowHeight
} from '@/constants'

const Act = new Container()
// 挂载一个初始化场景方法
Act.init = () => {
  const RES = resources['assets/1.json'].textures;
  const background = new Sprite(RES['backgroud1.png'])

  background.width = windowWidth;
  background.height = windowHeight;
  Act.addChild(background)
}

export default Act