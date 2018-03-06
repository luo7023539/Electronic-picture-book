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
  const background = new Sprite(getTexture('15-1/backgroud15.png'))
  const soundwave = new Sprite(getTexture('15-1/15-soundwave.png'))
  const record = new Sprite(getTexture('15-1/15-record.png'))
  const wrap = new Sprite(getTexture('15-1/15-1.png'))
  const content = new Sprite(getTexture('15-1/15-1-2.png'))
  const richText = createText("离月亮更近的地方，许下我的愿望\
  你也可以试着喊一下")

  // richText.width = 500
  richText.x = 163;
  richText.y = 650;

  Act.addChild(background, soundwave, richText)
}

export default Act