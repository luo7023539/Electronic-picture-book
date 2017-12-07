import {
  Container,
  Sprite,
  resources,
  windowWidth,
  windowHeight
} from '@/constants'

const Act = new Container()

Act.init = () => {
  const RES = resources['assets/2.json'].textures;
  const background = new Sprite(RES['backgroud2.png'])

  background.width = windowWidth;
  background.height = windowHeight;
  Act.addChild(background)

}

export default Act