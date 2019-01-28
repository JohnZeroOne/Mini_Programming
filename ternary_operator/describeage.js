// conditional refactor, removed whitespace

function describeAge(a) {
return"You're a(n)"+(a<= 12?" kid":a>=13&&a<=17?" teenager":a>=18&&a<=64?" adult":" elderly")
}

/* var st = "You're a(n)"
  if (age <= 12) {
    return st + " kid";
  } else if (age >= 13 && age <= 17) {
    return st + " teenager";
  } else if (age >= 18 && age <= 64) {
    return st + " adult";
  } else {
    return st + " elderly";
  }
} */
 
