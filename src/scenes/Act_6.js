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
  const background = new Sprite(getTexture('backgroud6.png'))

  const action_1 = createAnimateSprite([
    "assets/6-0.json",
    "assets/6-1.json",
    "assets/6-2.json",
    "assets/6-3.json",
  ])

  Act.quene.push(action_1)
  
  Act.addChild(background, action_1)
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