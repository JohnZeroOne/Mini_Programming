function calculateTip(amount, rating) {
var newrating = rating.toLowerCase();
var tip = 0

switch (newrating) {
  case "terrible":
    tip = 0
    break;
  case "poor":
    tip = amount * 0.05
    break;
  case "good":
    tip = amount * 0.1
    break;
  case "great":
    tip = amount * 0.15
    break;
  case "excellent":
    tip = amount * 0.2
    break;
  default:
    tip = 'Rating not recognised'
    break;
}
if (typeof tip === 'string' || tip instanceof String) {
  return tip;
} else {
  return Math.ceil(tip);
}
}
