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
  const background = new Sprite(getTexture('13/backgroud13.png'))
  const person = new Sprite(getTexture('13/13-1.png'))
  const cloud1 = new Sprite(getTexture('13/13-cloud1.png'))
  const cloud2 = new Sprite(getTexture('13/13-cloud2.png'))

  person.x = 220
  person.y = 310
  Act.addChild(background, person, cloud1, cloud2)
}

export default Act