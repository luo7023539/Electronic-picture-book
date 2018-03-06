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
  const girl = createAnimateSprite('assets/3-action-girl-face.json')
  const girl_face = createAnimateSprite('assets/3-action-girl-face.json')
  const dream_show = createAnimateSprite('assets/3-action-dream-show.json')
  const dream_hide = createAnimateSprite([
    "assets/3-action-dream-hide-0.json",
    "assets/3-action-dream-hide-1.json"
  ])
  const dream_hand = createAnimateSprite('assets/3-action-girl-hand.json')
  const star_drak = createAnimateSprite('assets/3-action-star-dark.json')

  const star_light = createAnimateSprite('assets/3-action-star-light.json')

  star_light.loop = true;
  star_light.play()

  const richText = createText("也许是因为我的声音太小了\
  爸爸妈妈每次只在我的梦里出现\
  醒来就又剩我一个人\
  ");

  richText.x = 520;
  richText.y = 630;
  Act.animate = {
    girl, dream_show, dream_hide, 
    star_drak, star_light,
    dream_hand,girl_face
  }

  dream_hand.visible = false
  dream_hide.visible = false
  star_drak.visible = false
  girl_face.visible = false
  
  Act.addChild(background, 
    dream_hide,girl_face,
    richText, girl, dream_hand,
    star_light, star_drak, dream_show)
}

Act.reset = function () {
  const animate = this.animate
  const { girl, dream_show, dream_hide, 
    star_drak, star_light,girl_face,
    dream_hand
  } = this.animate

  girl.visible = true
  dream_show.visible = true
  star_light.visible = true

  dream_hand.visible = false
  dream_hide.visible = false
  star_drak.visible = false
  girl_face.visible = false

  for(let key in animate) {
    const spr = animate[key]
    spr.gotoAndStop(0)
  }
  
}

Act.play = function () {
  this.reset()
  const { girl, dream_show, dream_hide, 
    star_drak, star_light,girl_face,
    dream_hand
  } = this.animate

  dream_show.onComplete = function () {
    dream_show.visible = false
    dream_hand.visible = true
    dream_hand.onComplete = function () {
      star_light.visible = false
      star_drak.visible = true

      dream_hand.visible = false
      dream_hide.visible = true

      girl.visible = false
      girl_face.visible = true

      girl_face.play()
      dream_hide.play()
      star_drak.play()
    }
    dream_hand.play()
  }

  dream_show.play()
}

export default Act