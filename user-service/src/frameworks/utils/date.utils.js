const dobRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-((19[0-9][0-9])|(20[0-1][0-9]))$/;

const isValidDOB = (dob) => {
  // Check if the input matches the DD-MM-YYYY format
  if (!dobRegex.test(dob)) {
    return false;
  }

  // Split the input into day, month, and year components
  const [day, month, year] = dob.split("-");

  // Create a Date object from the input
  const dobDate = new Date(`${year}-${month}-${day}`);

  // Calculate the age based on the current date
  const currentYear = new Date().getFullYear();
  const age = currentYear - dobDate.getFullYear();

  // Adjust the age if the current month and day are before the birth month and day
  if (
    new Date().getMonth() < dobDate.getMonth() ||
    (new Date().getMonth() === dobDate.getMonth() &&
      new Date().getDate() < dobDate.getDate())
  ) {
    age--;
  }

  // Check if the age is between 13 and 150
  return age >= 13 && age <= 150;
};

module.exports = {
  isValidDOB,
};
