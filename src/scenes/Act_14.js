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
  const background = new Sprite(getTexture('backgroud14.png'))

  const richText = createText("所以我就跑到奶奶家后面的小山坡上大喊")

  // richText.width = 500
  richText.x = 581;
  richText.y = 636;

  const action_1 = createAnimateSprite([
    "assets/14-0.json",
    "assets/14-1.json",
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