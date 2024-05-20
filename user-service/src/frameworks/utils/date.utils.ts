const dobRegex: RegExp =
/^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/;

function isValidDOB(dob: string): boolean {
  // Check if the input matches the DD-MM-YYYY format
  if (!dobRegex.test(dob)) {
    // return false;
    throw new Error("Invalid DOB")
  }

  // Split the input into day, month, and year components
  const [day, month, year] = dob.split("-");

  // Create a Date object from the input
  const dobDate = new Date(`${year}-${month}-${day}`);

  // Calculate the age based on the current date
  const currentYear = new Date().getFullYear();
  let age: number = currentYear - dobDate.getFullYear();

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
}

export { isValidDOB };
