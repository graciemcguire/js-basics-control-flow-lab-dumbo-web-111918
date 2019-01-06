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
  switch(tip)
}


 
let permissionsLevel;
let canViewProfiles = false;
let canImpersonateUsers = false;
 
switch (accountType) {
    case 'guest':
        permissionsLevel = 0;
        break;
    case 'user':
        permissionsLevel = 10;
        canViewProfiles = true;
        break;
    case 'admin':
        permissionsLevel = 20;
        canViewProfiles = true;
        canImpersonateUsers = true;
        break;
}