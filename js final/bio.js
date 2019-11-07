function biofn(){
  var b=document.getElementById('bio').value.length;
  var val=document.getElementById('bcount');
  var count=140-b;
  //console.log(count);
  if(count>=0)
  {
    val.innerHTML=count;
  }
}
