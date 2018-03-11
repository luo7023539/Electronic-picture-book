import {
  Container,
  Sprite,
  resources,
  getTexture,
  createText,
  createAnimateSprite
} from '@/constants'

const Act = new Container()

Act.quene = []

// 挂载一个初始化场景方法
Act.init = () => {
  const background = new Sprite(getTexture('3/backgroud3.png'))

  const richText = createText("也许是因为我的声音太小了\
  爸爸妈妈每次只在我的梦里出现\
  醒来就又剩我一个人\
  ");

  richText.x = 520;
  richText.y = 630;

  const action_1 = createAnimateSprite([
    "assets/3-0.json",
    "assets/3-1.json",
    "assets/3-2.json",
    "assets/3-3.json",
    "assets/3-4.json",
  ])
  Act.quene.push(action_1, richText)
  Act.addChild(background, richText, action_1)
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
    element.stop && element.stop()
  });
}


export default Act