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
  screenScaleRitoX,
  screenScaleRitoY,
  TWEEN,
  createAnimateSprite
} from '@/constants';


const Act = new Container()

Act.step = 0
Act.quene = []

// 挂载一个初始化场景方法
Act.init = () => {
  const indoor = new Sprite(getTexture('10/backgroud10-indoor.png'))
  const outdoor = new Sprite(getTexture('10/backgroud10-outdoor.png'))
  const sun = new Sprite(getTexture('10/10-sun.png'))
  const scrollContainer = new ScrollContainer();
  const layoutGroup = new LayoutGroup();

  const action_1 = createAnimateSprite("assets/10-1-0.json")
  const action_2 = createAnimateSprite([
    "assets/10-2-0.json",
  ])
  const action_3 = createAnimateSprite("assets/10-3-0.json")

  layoutGroup.addChild(outdoor)
  layoutGroup.addChild(sun)
  layoutGroup.addChild(indoor)

  layoutGroup.addChild(action_1)
  layoutGroup.addChild(action_2)
  layoutGroup.addChild(action_3)
  layoutGroup.scale.set(screenScaleRitoX, screenScaleRitoY)
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
    scrollContainer, layoutGroup, sun, richText
  }

  Act.addChild(scrollContainer, richText)
}

Act.play = function () {
  window.__widgets.hideBtn()

  const duration = 2000
  const {
    scrollContainer, layoutGroup, sun, richText
  } = Act.animate

  let step = Act.step
  let elm = Act.quene[step]
  if (step === 3) {
    Act.reset()
    Act.play()
    return 
  }
  elm.play()
  if (Act.step === 0) {
    richText.play()
    new TWEEN.Tween(sun)
      .to({ x: 100, y: -40 }, 2000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .start()
  }

  elm.onComplete = () => {
    elm.gotoAndStop(0)
    if (step === 2) {
      window.__widgets.showPlaying()
      return
    }
    if (Act.step === 1 || Act.step === 2) {
      new TWEEN.Tween(layoutGroup)
      .to({ x: -(step + 1) * 920 * screenScaleRitoX }, duration)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .start()
      .onComplete(Act.play)

    }

    if (Act.step === 1) {
      new TWEEN.Tween(sun)
        .to({ x: 1200, y: -80 }, 2000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start()
    }

    if (Act.step === 2) {
      new TWEEN.Tween(sun)
        .to({ x: 2400, y: -40 }, 2000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start()
    }
  }
  Act.step++
}

Act.reset = function () {
  const {
    scrollContainer, layoutGroup, sun
  } = Act.animate
  Act.step = layoutGroup.x  = sun.x = 0
}

export default Act