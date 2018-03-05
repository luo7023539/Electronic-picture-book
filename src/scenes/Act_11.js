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
  const background = new Sprite(getTexture('11/backgroud11.png'))
  const person1 = new Sprite(getTexture('11/11-1.png'))
  const person2 = new Sprite(getTexture('11/11-2.png'))
  
  const richText = createText("每当放学我还是会羡慕\
  她可以坐在自行车后座\
  我想要有那样一个人来接我\
  可是我知道……");

  // richText.width = 500
  richText.x = 404;
  richText.y = 550;

  Act.addChild(background, person1, person2,richText)
}

export default Act