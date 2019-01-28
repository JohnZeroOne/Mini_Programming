function calculateTip(amount, rating) {

  switch (rating.toLowerCase()) {
    case "terrible":
      amount = 0;
      break;
    case "poor":
      amount = amount * 0.05;
      break;
    case "good":
      amount = amount * 0.1;
      break;
    case "great":
      amount = amount * 0.15;
      break;
    case "excellent":
      amount = amount * 0.2;
      break;
    default:
      return 'Rating not recognised'
      break;
  }
  return Math.ceil(amount);
}
