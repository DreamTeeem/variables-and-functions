function formatFullName(firstName, lastName) {

  if (!firstName || !lastName) {
    return "Invalid name input.";
  }

  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

  lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

  return `${lastName}, ${firstName}`;

}

console.log(formatFullName("fatima", "edmonds"));
console.log(formatFullName("Fatima", ""));

function calculateTotalCost(price, quantity, taxRate, discount = 0) {
if (
  !Number.isFinite(price) ||
  !Number.isFinite(quantity) ||
  !Number.isFinite(taxRate) ||
  !Number.isFinite(discount)
) {
  return "Invalid input.";
}

  let totalCost = ((price * quantity) - discount) * (1 + taxRate);

  return totalCost;
}

console.log(calculateTotalCost(20, 3, 0.06));
console.log(calculateTotalCost("hello", 3, 0.06));

// Task 3: Functions with Conditional Logic

function checkEligibility(age, isEmployed) {
  if (age > 18 && isEmployed === true) {
    return "Eligible";
  } else if (age > 18 && isEmployed === false) {
    return "Conditionally eligible";
  } else {
    return "Not eligible";
  }
}

console.log(checkEligibility(25, true));
console.log(checkEligibility(25, false));
console.log(checkEligibility(18, true));

console.log(calculateTotalCost(20, 3, 0.06, 10));
console.log(calculateTotalCost(20, 3, 0.06));
console.log(calculateTotalCost(20, 3, 0.06, "hello"));