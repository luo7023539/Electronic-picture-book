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
  const background = new Sprite(getTexture('6/backgroud6.png'))

  const person1 = new Sprite(getTexture('6/6-1.png'))
  const person2 = new Sprite(getTexture('6/6-2.png'))

  const richText = createText("但是我还是忍不住羡慕别的小孩啊\
  他们可以牵着父母的手");

  // richText.width = 500
  richText.x = 644;
  richText.y = 522;
  

  Act.addChild(background, person1, person2, richText)
}

export default Act