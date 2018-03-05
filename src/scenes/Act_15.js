import {
  Container,
  Sprite,
  resources,
  windowWidth,
  windowHeight,
  getTexture
} from '@/constants'

const Act = new Container()
// 挂载一个初始化场景方法
Act.init = () => {
  const background = new Sprite(getTexture('15-1/backgroud15.png'))

  const soundwave = new Sprite(getTexture('15-1/15-soundwave.png'))

  const record = new Sprite(getTexture('15-1/15-record.png'))
  
  const wrap = new Sprite(getTexture('15-1/15-1.png')) 

  const content = new Sprite(getTexture('15-1/15-1-2.png')) 
  
  Act.addChild(background, soundwave)
}

export default Act