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
  const background = new Sprite(getTexture('9/backgroud9.png'))
  const person = new Sprite(getTexture('9/9-1.png'))

  const richText = createText("在学校，我有一个好朋友\
  她每天笑得很开心，像个小太阳");

  // richText.width = 500
  richText.x = 129;
  richText.y = 541;

  Act.addChild(background, person, richText)
}

export default Act