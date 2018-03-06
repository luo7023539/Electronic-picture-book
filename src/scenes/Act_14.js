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
  const background = new Sprite(getTexture('14/backgroud14.png'))

  const person = new Sprite(getTexture('14/14-1.png'))
  const moon = new Sprite(getTexture('14/14-moon.png'))

  const richText = createText("所以我就跑到奶奶家后面的小山坡上大喊")

  // richText.width = 500
  richText.x = 581;
  richText.y = 636;
  
  Act.addChild(background, person, moon, richText)
}

export default Act