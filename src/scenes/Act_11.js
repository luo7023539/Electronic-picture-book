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
  const background = new Sprite(getTexture('backgroud11.png'))
  
  const richText = createText("每当放学我还是会羡慕\
  她可以坐在自行车后座\
  我想要有那样一个人来接我\
  可是我知道……");

  // richText.width = 500
  richText.x = 404;
  richText.y = 550;
  const action_1 = createAnimateSprite([
    "assets/11-0.json",
    "assets/11-1.json",
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