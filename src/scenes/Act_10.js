import {
  Container,
  ScrollContainer,
  LayoutGroup,
  layout,
  Sprite,
  windowHeight,
  windowWidth,
  getTexture,
  createText,
  c,
  TWEEN,
  createAnimateSprite
} from '@/constants';


const Act = new Container()

Act.step = 0
Act.quene = []

// 挂载一个初始化场景方法
Act.init = () => {
  const sun = new Sprite(getTexture('10-sun.png'))
  const indoor = new Sprite(getTexture('backgroud10-indoor.png'))
  const outdoor = new Sprite(getTexture('backgroud10-outdoor.png'))
  const scrollContainer = new ScrollContainer();
  const layoutGroup = new LayoutGroup();

  const action_1 = createAnimateSprite("assets/10-1-0.json")
  const action_2 = createAnimateSprite([
    "assets/10-2-0.json",
    "assets/10-2-0.json"
  ])
  const action_3 = createAnimateSprite("assets/10-3-0.json")

  layoutGroup.addChild(outdoor)
  layoutGroup.addChild(indoor)
  layoutGroup.addChild(action_1)
  layoutGroup.addChild(action_2)
  layoutGroup.addChild(action_3)
  action_1.x = 0
  action_2.x = 900
  action_3.x = 1800
  Act.quene.push(action_1, action_2, action_3)
  scrollContainer.interactive = false
  scrollContainer.viewPort = layoutGroup
  scrollContainer.width = windowWidth
  scrollContainer.height = windowHeight

  var richText = createText("我们一起上课，画画，玩游戏……但是……");

  // richText.width = 500
  richText.x = 364;
  richText.y = 703;
  Act.animate = {
    scrollContainer, layoutGroup
  }

  Act.addChild(scrollContainer, richText)
}

Act.play = function () {
  let step = Act.step
  let elm = Act.quene[step]
  elm.play()
  if (Act.step === 2) {
    return Act.stop()
  }
  const duration = 2000
  const {
    scrollContainer, layoutGroup
  } = Act.animate

  elm.onComplete = () => {
    elm.gotoAndStop(0)
    new TWEEN.Tween(layoutGroup)
    .to({ x: -(step + 1) * 920 }, duration)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .start()
    .onComplete(Act.play)

    if (Act.step === 2) {
      return Act.stop()
    }
  }
  Act.step++
}

Act.stop = function () {
  const {
    scrollContainer, layoutGroup
  } = Act.animate
  Act.step = layoutGroup.x = 0
}

export default Act