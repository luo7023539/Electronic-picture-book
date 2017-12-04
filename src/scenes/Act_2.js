import {
  Container,
  Sprite,
  resources
} from '@/constants'

const Act = new Container()

Act.init = () => {
  const sprite = new Sprite(resources['assets/cat.png'].texture)
  sprite.x = 50;
  sprite.y = 50;
  Act.addChild(sprite)
}

export default Act