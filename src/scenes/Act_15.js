import {
  Container,
  Sprite,
  resources,
  windowWidth,
  windowHeight,
  getTexture,
  createText,
  createAnimateSprite,
  TWEEN
} from '@/constants'

const Act = new Container()
Act.quene = []
let audioContext, context, liveSource, levelChecker, isRecording

function onSuccess(stream) {
  audioContext = window.AudioContext || window.webkitAudioContext;
  context = new audioContext();
  liveSource = context.createMediaStreamSource(stream);
  levelChecker = context.createScriptProcessor(4096, 1, 1);
  liveSource.connect(levelChecker);

  const { cover } = Act.animate
  const originHeight = cover.height

  levelChecker.onaudioprocess = function (e) {
    var buffer = e.inputBuffer.getChannelData(0);
    var maxVal = 0;
    for (var i = 0; i < buffer.length; i++) {
      if (maxVal < buffer[i]) {
        maxVal = buffer[i];
      }
    }
    let volumn = Math.round(maxVal * 100)
    let rate = (volumn / 100) > 1 ? 1 : volumn / 100
    let height = originHeight - originHeight * rate
    let y = 95 * rate
    console.log(volumn, rate, height, y);
    new TWEEN.Tween(cover)
      .to({ height, y }, 150)
      .easing(TWEEN.Easing.Quadratic.In)
      .start();

    if (rate === 1) {
      // 当音量值大于0.5时，显示“声音太响”字样，并断开音频连接
      // console.log("您的声音太响了!!")
      window.setTimeout(() => {
        levelChecker.disconnect(context.destination)
        Act.play()
      }, 150)
    }
  };
}

function onError() {
  console.log('Error', arguments);
}

// 挂载一个初始化场景方法
Act.init = () => {
  const recordRES = resources["assets/record.json"].textures
  const record = new Sprite(recordRES['15-record.png'])
  const wrap = new Sprite(recordRES['15-1.png'])
  const content = new Sprite(recordRES['15-1-2.png'])
  const cover = new Sprite(recordRES['15-1-3.png'])
  const richText = createText("离月亮更近的地方，许下我的愿望\
  你也可以试着喊一下")
  const soundwave = new Sprite(getTexture('15-soundwave.png'))
  // richText.width = 500
  richText.x = 163;
  richText.y = 650;
  record.x = 10
  record.y = 580


  record.buttonMode = true;
  record.interactive = true;

  record.on('pointerdown', function () {
    if (isRecording) {
      levelChecker.disconnect(context.destination)
      isRecording = false
      return false
    }
    levelChecker.connect(context.destination)
    isRecording = true
  })


  navigator.getUserMedia = navigator.getUserMedia
    || navigator.webkitGetUserMedia
    || navigator.mozGetUserMedia
    || navigator.msGetUserMedia;

  navigator.getUserMedia({ audio: true }, onSuccess, onError)

  const action_1 = createAnimateSprite([
    "assets/15-0.json",
    "assets/15-1.json",
    "assets/15-2.json",
    "assets/15-3.json",
  ])

  Act.animate = {
    cover, soundwave, record, wrap, content, cover
  }
  Act.quene.push(action_1)

  Act.addChild(action_1, richText, soundwave, record, wrap, content, cover)
}

Act.play = function () {
  const {
    cover, soundwave, record, wrap, content
  } = Act.animate
  cover.visible
    = wrap.visible
    = content.visible
    = record.visible
    = soundwave.visible
    = false
  this.quene.forEach(element => {
    if (element.currentFrame === element.totalFrames - 1) {
      element.gotoAndPlay(0)
    } else {
      element.play()
    }
  });
}

Act.stop = function () {
  this.quene.forEach(element => {
    element.stop && element.stop()
  });
}

export default Act