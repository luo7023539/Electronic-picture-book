import {
  Container,
  Sprite,
  resources
} from '@/constants'

const Act = new Container()

Act.init = () => {
  const buttonLeft = new Sprite(resources['assets/dungeon.png'].texture)

  buttonLeft.x = 500

  Act.addChild(buttonLeft)

}

export default Act