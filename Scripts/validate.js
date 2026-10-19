function validateForm () {
  let name =document.forms["myForm"]["fname"].value;
  if (name == "") {
    alert("The First Name form must be filled out.");
    return false;
  }
  
  let question =document.forms["myForm"]["subject"].value;
  if (question == "") {
    alert("The question form must be filled out.")
    return false;
  }
  let email =document.forms["myForm"]["email"].value;
  if (email == "") {
    alert("You must include your email address.")
    return false;
  }
}