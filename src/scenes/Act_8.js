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
  const background = new Sprite(getTexture('8/backgroud8.png'))

  const hand = new Sprite(getTexture('8/8-1.png'))
  const flower = new Sprite(getTexture('8/8-2.png'))
  const rain = new Sprite(getTexture('8/8-2-rain.png'))
  const cloud = new Sprite(getTexture('8/8-3-cloud.png'))

  Act.addChild(background, hand, flower, cloud)

}

export default Act