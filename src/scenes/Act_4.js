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
  const background = new Sprite(getTexture('4/backgroud4.png'))
  const situation1 = new Sprite(getTexture('4/4-1.png'))
  const situation2 = new Sprite(getTexture('4/4-2.png'))
  const situation3 = new Sprite(getTexture('4/4-3.png'))
  const situation4 = new Sprite(getTexture('4/4-4.png'))

  const richText = createText("在家里，我每天自己起床，刷牙，吃饭，帮忙打扫");

  // richText.width = 500
  richText.x = 290;
  richText.y = 373;


  Act.addChild(background, situation1, situation2, situation3, situation4, richText)
}

export default Act