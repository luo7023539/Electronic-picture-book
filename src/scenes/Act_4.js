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
  const background = new Sprite(getTexture('backgroud4.png'))
  const richText = createText("在家里，我每天自己起床，刷牙，吃饭，帮忙打扫");
  richText.x = 290;
  richText.y = 373;

  const action_1 = createAnimateSprite([
    "assets/4-0.json",
    "assets/4-1.json",
    "assets/4-2.json",
    "assets/4-3.json",
    "assets/4-4.json",
  ])

  Act.quene.push(action_1)
  Act.addChild(background,richText, action_1)
}

Act.play = function () {
  this.quene.forEach(element => {
    if (element.currentFrame === element.totalFrames -1) {
      element.gotoAndPlay(0)
    } else {
      element.play()
    }
  });
}

Act.stop = function () {
  this.quene.forEach(element => {
    element.stop()
  });
}
export default Act