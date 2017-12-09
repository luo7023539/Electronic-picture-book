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
  const person1 = new Sprite(getTexture('7/7-1.png'))
  const person2 = new Sprite(getTexture('7/7-2.png'))
  

  Act.addChild(background, person1, person2)
}

export default Act