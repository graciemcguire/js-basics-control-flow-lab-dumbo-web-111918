function scuberGreetingForFeet(feet) { 
  let result 
  if (feet > 2500){
    return "No can do."
  } 
  else if (feet > 2000){
    result += feet
    return "I will gladly take your thirty bucks."
  }
  else if (feet < 400) {
    result += feet 
    return "This one is on me!"
  }
}

function ternaryCheckCity(city) {
  const checkCity = city === "New York" ? "Ok, sounds good." : false;
  return "Ok, sounds good."
  
}

function getFee(isMember) {
  return (isMember ? "$2.00" : "$10.00");
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(1));
// expected output: "$2.00"