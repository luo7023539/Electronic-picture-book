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
  const background = new Sprite(getTexture('5/backgroud5.png'))

  const person = new Sprite(getTexture('5/5-1.png'))

  const richText = createText("牵着奶奶的手陪她去散步、买菜\
  所有人都说我是个懂事的小孩");

  // richText.width = 500
  richText.x = 695;
  richText.y = 643;
  
  Act.addChild(background, person, richText)
}

export default Act