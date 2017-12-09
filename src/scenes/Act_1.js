import {
  Container,
  Sprite,
  resources,
  windowWidth,
  windowHeight,
  getTexture,
  c
} from '@/constants'

const Act = new Container()
// 挂载一个初始化场景方法
Act.init = () => {
  const background = new Sprite(getTexture('1/backgroud1.png'))
  const person = new Sprite(getTexture('1/1-1.png'))
  const moon = new Sprite(getTexture('1/moon01.png'))
  moon.x = 600

  const action = new Sprite(getTexture('1/moon01.png'))

  let curvedWaypoints = [

    //First curve
    [[action.x, action.y], [75, 500], [200, 500], [300, 300]],

    //Second curve
    [[300, 300], [250, 100], [100, 100], [action.x, action.y]]
  ];

  let spritePath = c.walkCurve(
    action,                    //The sprite
    curvedWaypoints,              //Array of curved waypoints
    300,                          //Total duration, in frames
    "smoothstep",                 //Easing type
    true,                         //Should the path loop?
    true,                         //Should the path yoyo?
    1000                          //Delay in milliseconds between segments
  );

  Act.addChild(background, person, moon, action)
}

export default Act