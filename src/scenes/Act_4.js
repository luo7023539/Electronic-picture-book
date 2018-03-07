import {
  Container,
  Sprite,
  resources,
  windowWidth,
  windowHeight,
  getTexture,
  createText,
  createAnimateSprite
} from '@/constants'

const Act = new Container()
Act.quene = []

// 挂载一个初始化场景方法
Act.init = () => {
  const background = new Sprite(getTexture('4/backgroud4.png'))
  const situation1 = createAnimateSprite('assets/4-action-1.json')
  const situation2 = createAnimateSprite('assets/4-action-2.json')
  const situation3 = createAnimateSprite('assets/4-action-3.json')
  const situation4 = createAnimateSprite('assets/4-action-4.json')
  const richText = createText("在家里，我每天自己起床，刷牙，吃饭，帮忙打扫");
  
  situation2.x = 500
  situation3.y = 350

  situation4.x = 500
  situation4.y = 370

  // richText.width = 500
  richText.x = 290;
  richText.y = 373;

  Act.animate = {
    situation1,
    situation2,
    situation3,
    situation4
  }
  
  Act.addChild(background, situation1, situation2, situation3, situation4, richText)
}

Act.play = function () {
  const {
    situation1,
    situation2,
    situation3,
    situation4
  } = Act.animate

  situation1.onComplete = function () {
    situation2.onComplete = function () {
      situation3.onComplete = function () {
        situation4.play()
      }
      situation3.play()
    }
    situation2.play()
  }
  situation1.play()
}

export default Act