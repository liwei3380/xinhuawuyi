//设置临界值,这个值可根据自己的需求进行设定，默认就3000也差不多了
var shakeThreshold = 3000;
//设置最后更新时间，用于对比
var lastUpdate     = 0;
//设置位置速率
var curShakeX=curShakeY=curShakeZ=lastShakeX=lastShakeY=lastShakeZ=0;

var cb;

function setcb(func){
	cb = func;
}

function addevent(){
    if (window.DeviceMotionEvent) {
        window.removeEventListener('devicemotion', deviceMotionHandler, false);
		console.log('您好，你目前所用的设备支持重力感应哦！');
	    window.addEventListener('devicemotion', deviceMotionHandler, false);
	}else{
	    alert('您好，你目前所用的设备好像不支持重力感应哦！');
	}
}

function removeevent(){
    if (window.DeviceMotionEvent) {
        window.removeEventListener('devicemotion', deviceMotionHandler, false);
    }else{
        alert('您好，你目前所用的设备好像不支持重力感应哦！');
    }
}

function deviceMotionHandler(event){
 
    //获得重力加速
    var acceleration =event.accelerationIncludingGravity;
 
    //获得当前时间戳
    var curTime = new Date().getTime();
 
    if ((curTime - lastUpdate)> 100) {
 
        //时间差
        var diffTime = curTime -lastUpdate;
            lastUpdate = curTime;
 
 
        //x轴加速度
        curShakeX = acceleration.x;
        //y轴加速度
        curShakeY = acceleration.y;
        //z轴加速度
        curShakeZ = acceleration.z;
 
        var speed = Math.abs(curShakeX + curShakeY + curShakeZ - lastShakeX - lastShakeY - lastShakeZ) / diffTime * 10000;

        if (speed > shakeThreshold) {
            //TODO 相关方法，比如：
            //throttle(rollfn,2000,2000);
            console.log('y')
            cb("console")
        }

        lastShakeX = curShakeX;
        lastShakeY = curShakeY;
        lastShakeZ = curShakeZ;
    }
}
module.exports = {removeevent,addevent,setcb}