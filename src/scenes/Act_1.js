import {
  Container,
  Sprite,
  resources,
  windowWidth,
  windowHeight,
  getTexture,
  c
} from '@/constants'

const Act = new Container()
// 挂载一个初始化场景方法
Act.init = () => {
  const background = new Sprite(getTexture('1/backgroud1.png'))
  const person = new Sprite(getTexture('1/1-1.png'))
  const moon = new Sprite(getTexture('1/moon01.png'))
  moon.x = 600
  Act.addChild(background, person, moon)
}

export default Act