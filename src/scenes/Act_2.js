import {
  Container,
  Sprite,
  resources,
  createText,
  getTexture
} from '@/constants'

const Act = new Container()
// 挂载一个初始化场景方法
Act.init = () => {
  const background = new Sprite(getTexture('2/backgroud2.png'))
  const person = new Sprite(getTexture('2/2-1.png'))

  var richText = createText("之后我就常常对着窗户外面\
  悄悄地向神仙许愿");

  // richText.width = 500
  richText.x = 400;
  richText.y = 70;

  
  Act.addChild(background, person, richText)
}

export default Act