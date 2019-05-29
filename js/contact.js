var x1=0;
var x2=0;
function check()
{
  
var x=document.forms["reg"]["firstname"].value;
if (x==null || x=="")
{   alert("小朋友哦，姓名没写呦~");
    return false;
}
else
{
    x2=1;
}
var x=document.forms["reg"]["pwd"].value;
if (x==null || x=="")
{
    alert("小朋友哦，电子邮箱没写呦~");
    return false;
}
else
{   x1=1;
}
if(x1==1&&x2==1)
{
      alert("小朋友哦，邮件发送成功喽，预计在三个工作日内回复哦~");
}
   
}
  
 