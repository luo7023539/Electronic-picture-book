import {
  Container,
  Sprite,
  resources,
  windowWidth,
  windowHeight,
  getTexture,
  createText,
  createAnimateSprite
} from '@/constants'

const Act = new Container()
Act.quene = []
let audioContext, context, liveSource

function onSuccess(stream){
  console.log('onSuccess');
	audioContext = window.AudioContext || window.webkitAudioContext;
	context = new audioContext(); //创建一个管理、播放声音的对象
	liveSource = context.createMediaStreamSource(stream); //将麦克风的声音输入这个对象
    var levelChecker = context.createScriptProcessor(4096,1,1); //创建一个音频分析对象，采样的缓冲区大小为4096，输入和输出都是单声道
    liveSource.connect(levelChecker); //将该分析对象与麦克风音频进行连接
    levelChecker.onaudioprocess = function(e) { //开始处理音频
		var buffer = e.inputBuffer.getChannelData(0); //获得缓冲区的输入音频，转换为包含了PCM通道数据的32位浮点数组
		//创建变量并迭代来获取最大的音量值
		var maxVal = 0; 
		for (var i = 0; i < buffer.length; i++) {
			if (maxVal < buffer[i]) {
				maxVal = buffer[i];
			}
		}
    //显示音量值
    console.log("您的音量值："+Math.round(maxVal*100));
		if(maxVal>.5){
			//当音量值大于0.5时，显示“声音太响”字样，并断开音频连接
			console.log("您的声音太响了!!")
			liveSource.disconnect(levelChecker);
		}
	};
}

function onError () {
  console.log('Error', arguments);
}

// 挂载一个初始化场景方法
Act.init = () => {
  const recordRES = resources["assets/record.json"].textures
  const record = new Sprite(recordRES['15-record.png'])
  const wrap = new Sprite(recordRES['15-1.png'])
  const content = new Sprite(recordRES['15-1-3.png'])
  const richText = createText("离月亮更近的地方，许下我的愿望\
  你也可以试着喊一下")
  const soundwave = new Sprite(getTexture('15-soundwave.png'))
  // richText.width = 500
  richText.x = 163;
  richText.y = 650;
  record.x = 10
  record.y = 580


  if(!navigator.getUserMedia){
    alert("您的浏览器不支持获取音频。")
  }

  navigator.getUserMedia({audio: true}, onSuccess, onError)

  const action_1 = createAnimateSprite([
    "assets/15-0.json",
    "assets/15-1.json",
    "assets/15-2.json",
    "assets/15-3.json",
  ])

  const save = new Sprite(getTexture('15-save.png'))
  const share = new Sprite(getTexture('15-share.png'))
  save.x = 40
  save.y = 650
  share.x = 280
  share.y = 650

  Act.quene.push(action_1)

  Act.addChild(action_1, richText, wrap, soundwave, content, record, save, share)
}

Act.play = function () {
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
    element.stop()
  });
}

export default Act