import {
  Container,
  Sprite,
  resources,
  windowWidth,
  windowHeight,
  getTexture,
  createText,
  createAnimateSprite,
  c
} from '@/constants'


const Act = new Container()
// 挂载一个初始化场景方法
Act.quene = []

Act.init = () => {
  const background = new Sprite(getTexture('backgroud1.png'))

  var richText = createText("有一天，奶奶和我在院子里看月亮\
  我指着月亮说它弯弯地像奶奶的眉毛\
  奶奶连忙捂住我的耳朵\
  “可不敢用手指月亮，当心晚上来割你的小耳朵！”\
  吓得我都不敢看它了\
  奶奶说月亮上住的神仙呢\
  每当星星挂满天空，只要对着它许愿，愿望就能实现");

  richText.x = 510;
  richText.y = 410;

  const action_1 = createAnimateSprite([
    "assets/1-0.json",
    "assets/1-1.json",
    "assets/1-2.json",
    "assets/1-3.json",
    "assets/1-4.json",
    "assets/1-5.json",
    "assets/1-6.json",
  ])

  Act.quene.push(action_1)

  Act.addChild(
    background,
    richText,
    action_1
  )
  
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