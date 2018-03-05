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
// 挂载一个初始化场景方法
Act.init = () => {
  const background = new Sprite(getTexture('12/backgroud12.png'))
  const person = new Sprite(getTexture('12/12-1.png'))

  const richText = createText("那个人为我正在撑起整个世界");

  // richText.width = 500
  richText.x = 381;
  richText.y = 712;

  Act.addChild(background, person,richText)

}

export default Act