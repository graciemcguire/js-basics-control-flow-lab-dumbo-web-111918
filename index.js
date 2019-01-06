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
  const checkCity = city 
}

const age = 17;
 
const isAdult = age >= 18 ? true : false;
 
const canWork = age >= 16 ? 1 === 1 : 1 !== 1;
 
const canEnlist = isAdult ? true : false;