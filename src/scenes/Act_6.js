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
  const background = new Sprite(getTexture('6/backgroud6.png'))

  const richText = createText("我还是忍不住羡慕别的小孩啊\
  他们可以牵着父母的手");

  // richText.width = 500
  richText.x = 695;
  richText.y = 643;

  const action_1 = createAnimateSprite([
    "assets/6-0.json",
    "assets/6-1.json",
    "assets/6-2.json",
    "assets/6-3.json",
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