function checkForm(form)
{
  if(form.p1.value != form.p2.value) {
    alert("the passwords must match!");
    form.p1.focus();
    return false;
  }
  else if(form.p1.value.length < 8) {
    form.p1.focus();
    return false;
  }
  alert("Valid password");
}

