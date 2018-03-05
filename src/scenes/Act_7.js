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
  const background = new Sprite(getTexture('7/backgroud7.png'))
  const person1 = new Sprite(getTexture('7/7-1.png'))
  const person2 = new Sprite(getTexture('7/7-2.png'))
  
  const richText = createText("我想要有那样一双手牵着我");

  // richText.width = 500
  richText.x = 184;
  richText.y = 144;

  Act.addChild(background, person1, person2, richText)
}

export default Act