var elUser=document.getElementById('user');
var emsg=document.getElementById('msg');

function checkUserName(minLength)
{
  if(elUser.value.length  < minLength)
  {
    emsg.textContent='Username must be' +minLength+ 'Characters or more';
  }
  else
  {
    emsg.textContent='';
  }
}
elUser.addEventListener('blur', function() { checkUserName(5); });
