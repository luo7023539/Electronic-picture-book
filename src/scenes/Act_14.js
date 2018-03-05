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
  const background = new Sprite(getTexture('14/backgroud14.png'))

  const person = new Sprite(getTexture('14/14-1.png'))
  const moon = new Sprite(getTexture('14/14-moon.png'))

  Act.addChild(background, person, moon)
}

export default Act