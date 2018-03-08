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
  const background = new Sprite(getTexture('backgroud9.png'))

  const richText = createText("在学校，我有一个好朋友\
  她每天笑得很开心，像个小太阳");

  // richText.width = 500
  richText.x = 129;
  richText.y = 541;

  const action_1 = createAnimateSprite([
    "assets/9-0.json",
  ])

  Act.quene.push(action_1)

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
    element.stop()
  });
}

export default Act