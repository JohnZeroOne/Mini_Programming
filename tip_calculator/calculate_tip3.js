function calculateTip(amount, rating) {

  let newrating = rating.toLowerCase();
  let tip = 0
  
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
      return 'Rating not recognised'
      break;
  }
  return Math.ceil(tip);
}
