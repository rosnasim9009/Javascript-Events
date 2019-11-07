var f,s,t,fo,fi,s,ch;
$('#name').on('blur',function(){
  var name=document.getElementById('n');
  if(this.value.length  == 0)
  {
    name.innerHTML='Username is required!';
    f=0
  }
  else {
    name.innerHTML='';
    f=1;
  }
});

$('#email').on('blur',function(){
  var mail=document.getElementById('e');
  if(this.value.length  == 0)
  {
    mail.innerHTML='Email is required!';
    s=0;
  }
  else {
    mail.innerHTML='';
    s=1;
  }
});

$('#pwd').on('blur',function(){
  var pwd=document.getElementById('p');
  if(this.value.length  == 0)
  {
    pwd.innerHTML='Password is required!';
    t=0;
  }
  else {
    pwd.innerHTML='';
    t=1;
  }
});

$('#cpwd').on('blur',function(){
  var cp=document.getElementById('cp');
  if(this.value.length  == 0)
  {
    cp.innerHTML='Confirm Password is required!';
    fo=0;
  }
  else {
    cp.innerHTML='';
    fo=1;
  }
});

$('#date').on('blur',function(){
  var dob=document.getElementById('d');
  if(this.value.length  == 0)
  {
    dob.innerHTML='Birthdate is required!';
    fi=0;
  }
  else {
    dob.innerHTML='';
    fi=1;
  }
});

$('#bio').on('blur',function(){
  var bio=document.getElementById('b');
  if(this.value.length  == 0)
  {
    bio.innerHTML='Bio is required!';
    s=0;
  }
  else {
    bio.innerHTML='';
    s=1;
  }
});

function submitRegister(){
  if(f===1&&s===1&&t===1&&fo===1&&fi===1&&s===1)
  {
    //window.location.replace("https://www.google.com");
    //location.replace("https://www.w3schools.com");
    //location.assign("http://www.fim-live.com");
    //alert("Success");
    //location.assign("http://www.mozilla.org");

  }
  else {
    alert("Registration Failed !!");
    event.preventDefault();

  }
}

function check() {
  var p=document.getElementById('pwd');
  var cfp=document.getElementById('cpwd');
  var c=document.getElementById('cp');
  //console.log(p.value);
  //console.log(cfp.value);
  if(p.value===cfp.value)
  {
    $('#no2').hide();
    $('#yes2').show();
    ch=1;
  }
  else
  {
    c.innerHTML='Password must be same!';
    $('#no2').show();
    ch=0;
  }
}
