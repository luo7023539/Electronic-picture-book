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
  const background = new Sprite(getTexture('5/backgroud5.png'))

  const richText = createText("牵着奶奶的手陪她去散步、买菜\
  所有人都说我是个懂事的小孩");

  // richText.width = 500
  richText.x = 695;
  richText.y = 643;

  const action_1 = createAnimateSprite([
    "assets/5-0.json",
    "assets/5-1.json",
    "assets/5-2.json",
    "assets/5-3.json",
  ])

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