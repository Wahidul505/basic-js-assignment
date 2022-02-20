// problem 1 
function anaToVori(ana) {
  // message for invalid parameters 
  if (typeof ana != 'number' || ana < 0) {
    return 'Please, Enter a valid ana as input.';
  }
  // calculation for converting ana to vori 
  const vori = ana / 16;
  return vori;
}

// problem 2
function pandaCost(singaraQuantity, samosaQuantity, jalebiQuantity) {
  //waring message for invalid parameters
  if (typeof singaraQuantity != 'number' || typeof samosaQuantity != 'number' || typeof jalebiQuantity != 'number' || singaraQuantity < 0 || samosaQuantity < 0 || jalebiQuantity < 0) {
    return 'Enter a valid Quantity , Please.'
  }
  // declaring price for per singara , samosa and jalebi 
  const perSingaraPrice = 7;
  const perSamosaPrice = 10;
  const perJalebiPrice = 15;
  // calculating total individaul price 
  const totalSingaraCost = singaraQuantity * perSingaraPrice;
  const totalSamosaCost = samosaQuantity * perSamosaPrice;
  const totalJalebiCost = jalebiQuantity * perJalebiPrice;
  // calculating overall price 
  const totalCost = totalSingaraCost + totalSamosaCost + totalJalebiCost;
  return totalCost;
}

// problem 3 
function picnicBudget(numberOfPeople) {
  // warning message for invalid input parameters
  if (typeof numberOfPeople != 'number' || numberOfPeople <= 0) {
    return 'Please , Put a valid number of people as Input.';
  }
  // declaring resort rent for per conditions 
  const perPersonRentForFirst100 = 5000;
  const perPersonRentForSecond100 = 4000;
  const perPersonRentForRestPeople = 3000;
  // main conditions 
  if (numberOfPeople <= 100) {
    const totalBudget = numberOfPeople * perPersonRentForFirst100;
    return totalBudget;
  }
  else if (numberOfPeople > 100 && numberOfPeople <= 200) {
    const totalRentForFirst100 = 100 * perPersonRentForFirst100;
    const restPeoples = numberOfPeople - 100;
    const totalRentForSecond100 = restPeoples * perPersonRentForSecond100;
    const totalBudget = totalRentForFirst100 + totalRentForSecond100;
    return totalBudget;
  }
  else {
    const totalRentForFirst100 = 100 * perPersonRentForFirst100;
    const totalRentForSecond100 = 100 * perPersonRentForSecond100;
    const restPeoples = numberOfPeople - 200;
    const totalRentForRestPeople = restPeoples * perPersonRentForRestPeople;
    const totalBudget = totalRentForFirst100 + totalRentForSecond100 + totalRentForRestPeople;
    return totalBudget;
  }
}

// problem 4 
function oddFriend(namesArray) {
  // message for invalid parameter
  if (typeof namesArray != 'object') {
    return 'Please , Enter a valid input parameter.';
  }
  // declaring initial value 
  let oddName = namesArray[0];
  for (const name of namesArray) {
    // message for invalid parameter
    if (typeof name != 'string') {
      return 'Please, Enter a valid input parameter.';
    }
    // main calculation 
    if (name.length % 2 != 0) {
      oddName = name;
      break;
    }
  }
  return oddName;
}