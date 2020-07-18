checkPassword(val) {
  //password requirements = one upper case letter, one lower case letter, one number and has between 6 and 20 characters
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (val.match(passw)) {
    //change background to green
  } else {
   //change background to red
  }
}

setInputValue(property, val) {
  // set input property rules
  switch (property) {
    case "password":
      this.checkPassword(val);
      break;

    default:
      break;
  }
}