import {
  Container,
  Sprite,
  resources
} from '@/constants'

const Act = new Container()
// 挂载一个初始化场景方法
Act.init = () => {
  const buttonLeft = new Sprite(resources['assets/cat.png'].texture)
  const buttonRight = new Sprite(resources['assets/cat.png'].texture)

  buttonLeft.buttonMode = true;
  buttonLeft.interactive = true;
  buttonLeft.x = 50;
  buttonLeft.y = 50;

  buttonRight.buttonMode = true;
  buttonRight.interactive = true;
  buttonRight.x = 100;
  buttonRight.y = 100

  Act.addChild(buttonLeft, buttonRight)
}

export default Act