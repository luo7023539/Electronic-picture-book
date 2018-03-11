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
  const background = new Sprite(getTexture('8/backgroud8.png'))
  const hand = new Sprite(getTexture('8/8-1.png'))

  const richText = createText("可是我知道\
  那双大手为我正在抵挡所有的苦难");
  hand.y = 236
  // richText.width = 500
  richText.x = 166;
  richText.y = 691;

  const action_1 = createAnimateSprite([
    "assets/8-0.json",
    "assets/8-1.json",
    "assets/8-2.json",
    "assets/8-3.json",
  ])

  Act.quene.push(action_1, richText)
  
  Act.addChild(background, action_1, richText, hand)

}

Act.play = function () {
  this.quene.forEach(element => {
    if (element.currentFrame === element.totalFrames - 1) {
      element.gotoAndPlay(0)
    } else {
      element.play()
    }
  });
}

Act.stop = function () {
  this.quene.forEach(element => {
    element.stop && element.stop()
  });
}


export default Act