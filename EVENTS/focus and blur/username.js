function checkUserName()
{
  var uname=elUser.value;
  if(uname.length  < 5)
  {
    emsg.className='warning';
    emsg.textContent='Not long enouh, yet..';
  }
  else{
    emsg.textContent='';
  }
}

function tipUserName()
{
  emsg.className='tip';
  emsg.innerHTML='Username must be atleast 5 characters'
}
var emsg=document.getElementById('msg');
var elUser=document.getElementById('user');
elUser.addEventListener('blur',checkUserName);
elUser.addEventListener('focus',tipUserName);
