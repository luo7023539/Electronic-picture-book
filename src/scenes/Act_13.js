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
  const background = new Sprite(getTexture('13/backgroud13.png'))

  const action_1 = createAnimateSprite([
    "assets/13-0.json",
    "assets/13-1.json",
  ])

  const richText = createText("我有一个愿望！\
  也许是神仙住的太远了，没有听到我的声音");

  // richText.width = 500
  richText.x = 535;
  richText.y = 560;

  Act.quene.push(action_1, richText)

  Act.addChild(background, action_1, richText)
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