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
  const background = new Sprite(getTexture('3/backgroud3.png'))
  const person1 = new Sprite(getTexture('3/3-1.png'))
  const person2 = new Sprite(getTexture('3/3-2.png'))
  const star_drak = new Sprite(getTexture('3/star_drak.png'))
  const star_light = new Sprite(getTexture('3/star_light.png'))

  Act.addChild(background, person1, person2, star_drak, star_light)
}

export default Act