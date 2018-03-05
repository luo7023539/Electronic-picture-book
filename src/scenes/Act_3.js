import {
  Container,
  Sprite,
  resources,
  getTexture,
  createText
} from '@/constants'

const Act = new Container()
// 挂载一个初始化场景方法
Act.init = () => {
  const background = new Sprite(getTexture('3/backgroud3.png'))
  const person1 = new Sprite(getTexture('3/3-1.png'))
  const person2 = new Sprite(getTexture('3/3-2.png'))
  const star_drak = new Sprite(getTexture('3/star_drak.png'))
  const star_light = new Sprite(getTexture('3/star_light.png'))

  const richText = createText("之后我就常常对着窗户外面\
  悄悄地向神仙许愿");

  // richText.width = 500
  richText.x = 510;
  richText.y = 410;


  Act.addChild(background, person1, person2, star_drak, star_light, richText)
}

export default Act