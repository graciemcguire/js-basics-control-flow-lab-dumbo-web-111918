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
  return (city === "NYC" ? "Ok, sounds good." : "No go.")
}

function swithOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      "Thank you so much!"
      break;
    case 'not so generous':
      "Thank you."
      break;
    case ''  
  }
}


 
