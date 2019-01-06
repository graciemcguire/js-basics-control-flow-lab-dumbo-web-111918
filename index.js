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
    default:
    'Bye.'
  }
}

 describe('switchOnCharmFromTip()', function () {
    it('should return "Thank you so much." if the tip is generous', function () {
      expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
    });

    it('should return "Thank you." if the tip is not as generous', function () {
      expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
    });

    it('should return "Bye." if anything else', function () {
      expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
 
