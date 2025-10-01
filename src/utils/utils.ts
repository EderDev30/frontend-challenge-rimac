export function getAge(birthDay: string): number {
  const [day, month, year] = birthDay.split("-").map(Number);

  // JS Date months are 0-based, so subtract 1 from month
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  // Check if the birthday hasn't happened yet this year
  const hasHadBirthday =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasHadBirthday) {
    age--;
  }

  return age;
}
