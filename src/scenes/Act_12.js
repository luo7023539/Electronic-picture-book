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
  const background = new Sprite(getTexture('12/backgroud12.png'))
  const person = new Sprite(getTexture('12/12-1.png'))
  Act.addChild(background, person)
}

export default Act