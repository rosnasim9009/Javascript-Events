function checkUserName()
{
  var emsg=document.getElementById('msg');
  if(this.value.length  < 5)
  {
    emsg.textContent='Username must be 5 Characters or more';
  }
  else{
    emsg.textContent='';
  }
}
var elUser=document.getElementById('user');
elUser.onblur=checkUserName;
