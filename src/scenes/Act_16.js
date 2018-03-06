import {
  Container,
  Sprite,
  resources,
  windowWidth,
  windowHeight,
  getTexture
} from '@/constants'

const Act = new Container()
Act.quene = []
// 挂载一个初始化场景方法
Act.init = () => {
  const background = new Sprite(getTexture('15-2/backgroud15-2.png'))
  
  const save = new Sprite(getTexture('15-2/15-save.png'))
  
  const share = new Sprite(getTexture('15-2/15-share.png'))

  save.x = 40
  save.y = 650
  
  share.x = 280
  share.y = 650
  
  const wrap = new Sprite(getTexture('15-2/15-2.png'))
  
  Act.addChild(background, save, share, wrap)

  
}

export default Act