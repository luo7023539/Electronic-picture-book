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
  const background = new Sprite(getTexture('7/backgroud7.png'))

  const richText = createText("我想要有那样一双手牵着我");

  // richText.width = 500
  richText.x = 184;
  richText.y = 144;

  const action_1 = createAnimateSprite([
    "assets/7-0.json",
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