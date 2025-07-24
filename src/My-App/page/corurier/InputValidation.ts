import type { CourierType } from "./CourierInterface";

export const validateCourier = (courier: CourierType): string | null => {
  if (!courier.pid || courier.pid.length < 6) {
    return "პირადი ნომერი უნდა შედგებოდეს მინიმუმ 6 ციფრისგან";
  }

  if (!courier.phoneNumber || courier.phoneNumber.length < 6) {
    return "ტელეფონის ნომერი უნდა შედგებოდეს მინიმუმ 6 ციფრისგან";
  }

  if (!courier.password || courier.password.length < 5) {
    return "პაროლი უნდა შედგებოდეს მინიმუმ 5 სიმბოლოსგან";
  }

  if (!courier.vehicle) {
    return "გთხოვ აირჩიე ტრანსპორტი";
  }

  if (!courier.workingDays || courier.workingDays.length < 5) {
    return "მინიმუმ 5 სამუშაო დღე უნდა იყოს არჩეული";
  }



  if (!courier.email) {
  return "გთხოვ მიუთითე იმეილი";
} else {
  if (courier.email.length < 6) {
    return "იმეილი უნდა იყოს მინიმუმ 6 სიმბოლო";
  }
  const atIndex = courier.email.indexOf('@');
  if (atIndex === -1) {
    return "იმეილში უნდა იყოს '@' სიმბოლო";
  }
  const domainPart = courier.email.slice(atIndex + 1);
  const dotIndex = domainPart.lastIndexOf('.');
  if (dotIndex === -1) {
    return "იმეილში უნდა იყოს წერტილი '@' სიმბოლოს შემდეგ";
  }
  const domainExtension = domainPart.slice(dotIndex + 1);
  if (domainExtension.length < 2) {
    return "იმეილის გაფართოება უნდა შეიცავდეს მინიმუმ 2 ასოს";
  }
}

  return null; 
};
