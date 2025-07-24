import type { UserType } from "./UserInterface";

export const validateUser = (user: UserType): string | null => {
  

  if (!user.pid || user.pid.length < 6) {
    return "პირადი ნომერი უნდა შედგებოდეს მინიმუმ 6 ციფრისგან";
  }

  if (!user.phoneNumber || user.phoneNumber.toString().length < 6) {
    return "ტელეფონის ნომერი უნდა შედგებოდეს მინიმუმ 6 ციფრისგან";
  }

  if (!user.password || user.password.length < 5) {
    return "პაროლი უნდა შედგებოდეს მინიმუმ 5 სიმბოლოსგან";
  }

  if (
    !user.email ||
    user.email.length < 5 ||
    !user.email.includes('.') ||
    user.email.split('.').pop()!.length < 2
  ) {
    return "გთხოვთ შეიყვანოთ ვალიდური მეილი";
  }

  if (!user.country || user.country.length < 3) {
    return "ქვეყანა უნდა შეიცავდეს მინიმუმ 3 სიმბოლოს";
  }

  if (!user.city || user.city.length < 3) {
    return "ქალაქი უნდა შეიცავდეს მინიმუმ 3 სიმბოლოს";
  }

  if (!user.street || user.street.length < 3) {
    return "ქუჩა უნდა შეიცავდეს მინიმუმ 3 სიმბოლოს";
  }

  return null;
};
