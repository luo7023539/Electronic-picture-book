import {
  Container,
  Sprite,
  resources
} from '@/constants'

const Act = new Container()
// 挂载一个初始化场景方法
Act.init = () => {
  const buttonLeft = new Sprite(resources['assets/dungeon.png'].texture)

  Act.addChild(buttonLeft)
}

export default Act