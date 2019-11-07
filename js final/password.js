$('#pwd').on('blur',function(){
  var pwd=document.getElementById('p');
  var icon=document.getElementById('yes');
  if(this.value.length  < 8)
  {
    pwd.innerHTML='Password must be 8 characetrs or more!';
    $('#no1').show();
  }
  else
  {
    pwd.innerHTML='';
    $('#no1').hide();
    $('#yes1').show();
  }
});
