import {
  Container,
  Sprite,
  resources
} from '@/constants'

const Act = new Container()
// 挂载一个初始化场景方法
Act.init = () => {
  const sprite = new Sprite(resources['assets/cat.png'].texture)
  Act.addChild(sprite)
}

export default Act