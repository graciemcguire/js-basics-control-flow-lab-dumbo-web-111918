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
  return (city === "New York" ? "Ok, sounds good." : "No go.")
}
