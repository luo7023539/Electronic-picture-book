import {
  Container,
  Sprite,
  resources,
  windowWidth,
  windowHeight,
  getTexture,
  createText
} from '@/constants'

const Act = new Container()
Act.quene = []

// 挂载一个初始化场景方法
Act.init = () => {
  const background = new Sprite(getTexture('13/backgroud13.png'))
  const person = new Sprite(getTexture('13/13-1.png'))
  const cloud1 = new Sprite(getTexture('13/13-cloud1.png'))
  const cloud2 = new Sprite(getTexture('13/13-cloud2.png'))

  person.x = 220
  person.y = 310

  const richText = createText("我有一个愿望！\
  也许是神仙住的太远了，没有听到我的声音")

  // richText.width = 500
  richText.x = 519;
  richText.y = 546;

  Act.addChild(background, person, cloud1, cloud2, richText)
}

export default Act