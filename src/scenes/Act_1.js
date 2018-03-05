import {
  Container,
  Sprite,
  resources,
  windowWidth,
  windowHeight,
  getTexture,
  createText,
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

  var richText = createText("有一天，奶奶和我在院子里看月亮\
  我指着月亮说它弯弯地像奶奶的眉毛\
  奶奶连忙捂住我的耳朵\
  “可不敢用手指月亮，当心晚上来割你的小耳朵！”\
  吓得我都不敢看它了\
  奶奶说月亮上住的神仙呢\
  每当星星挂满天空，只要对着它许愿，愿望就能实现");

  // richText.width = 500
  richText.x = 510;
  richText.y = 410;

  Act.addChild(background, person, moon, action, richText)
}

export default Act