var em=document.getElementById('email');
var mail=document.getElementById('e');

function emailCheck() {
//console.log(e.value);
  var emailReg = /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z 0-9]+).([a-z A-Z]{2,5})$/;
  console.log(emailReg.test(em.value));
  if(emailReg.test(em.value))
  {
    mail.innerHTML='';
  }
  else
  {
    mail.innerHTML='Enter a Valid Email';
  }
}

function dobCheck() {
  var d=document.getElementById('date');
  //console.log(d.value.split("-")[0]);
  var dob = new Date();
  var cyear = dob.getFullYear();//console.log(cyear);
  var year=d.value.split("-")[0];//console.log(year);
  var age=cyear-year;
  //console.log(age);
  if(age <= 18)
  {
    var id=document.getElementById('consent');
    $('#consent').show();
  }
  else {
    $('#consent').hide();
  }

}
