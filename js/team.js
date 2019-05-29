var curIndex=0;

var timeInterval=2000;
var arr=new Array();
arr[0]="../images/photos/1.png";
arr[1]="../images/photos/2.png";
arr[2]="../images/photos/3.png";
arr[3]="../images/photos/4.png";


function changeImg()
{
var obj=document.getElementById("obj");
if (curIndex==arr.length-1)
{
curIndex=0;
}
else
{
curIndex+=1;
}
obj.src=arr[curIndex];
}
setInterval(changeImg,timeInterval);