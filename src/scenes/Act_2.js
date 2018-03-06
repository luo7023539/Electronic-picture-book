import {
  Container,
  Sprite,
  resources,
  createText,
  getTexture,
  createAnimateSprite
} from '@/constants'

const Act = new Container()
// 挂载一个初始化场景方法 
Act.quene = []

Act.init = () => {
  const background = new Sprite(getTexture('2/backgroud2.png'))
  const person = createAnimateSprite('assets/2-1-action.json')
  
  person.loop = false
  Act.quene.push(person)

  const moon_shine = createAnimateSprite('assets/moon-shine.json')

  moon_shine.x = -600
  moon_shine.loop = true
  moon_shine.animationSpeed = .1
  moon_shine.play()


  var richText = createText("之后我就常常对着窗户外面\
  悄悄地向神仙许愿");

  // richText.width = 500
  richText.x = 400;
  richText.y = 70;

  

  Act.addChild(background, person, richText, moon_shine)
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