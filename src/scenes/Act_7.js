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
  const background = new Sprite(getTexture('7/backgroud7.png'))

  background.width = windowWidth;
  background.height = windowHeight;
  Act.addChild(background)
}

export default Act