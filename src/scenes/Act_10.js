import {
  Container,
  ScrollContainer,
  LayoutGroup,
  layout,
  Sprite,
  resources,
  windowHeight,
  windowWidth,
  getTexture,
  createText,
  c
} from '@/constants';

const Act = new Container()
Act.quene = []

// 挂载一个初始化场景方法
Act.init = () => {
  const person1 = new Sprite(getTexture('10/10-1.png'))
  const person2 = new Sprite(getTexture('10/10-2.png'))
  const person3 = new Sprite(getTexture('10/10-3.png'))
  const sun = new Sprite(getTexture('10/10-sun.png'))
  
  const indoor = new Sprite(getTexture('10/backgroud10-indoor.png'))
  const outdoor = new Sprite(getTexture('10/backgroud10-outdoor.png'))
  const scrollContainer = new ScrollContainer();

  const layoutGroup = new LayoutGroup();

  layoutGroup.addChild(indoor)
  layoutGroup.addChild(outdoor)
  layoutGroup.addChild(person1)
  layoutGroup.addChild(person2)
  layoutGroup.addChild(person3)
  
  // scrollContainer.interactive = false
  scrollContainer.viewPort = layoutGroup
  scrollContainer.width = windowWidth 
  scrollContainer.height = windowHeight 

  var richText = createText("我们一起上课，画画，玩游戏……但是……");

  // richText.width = 500
  richText.x = 364;
  richText.y = 703;

  Act.addChild(scrollContainer, richText)
}

export default Act