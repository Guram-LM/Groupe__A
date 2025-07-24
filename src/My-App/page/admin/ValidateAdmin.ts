import type { AdminType } from "./AdminInterface";

export const validateAdmin = (admin: AdminType): string | null => {
  
  if (!admin.pid || admin.pid.length < 6) {
    return "პირადი ნომერი უნდა შედგებოდეს მინიმუმ 6 ციფრისგან";
  }

 
  if (!admin.phoneNumber || admin.phoneNumber.length < 6) {
    return "ტელეფონის ნომერი უნდა შედგებოდეს მინიმუმ 6 ციფრისგან";
  }


  if (!admin.password || admin.password.length < 5) {
    return "პაროლი უნდა შედგებოდეს მინიმუმ 5 სიმბოლოსგან";
  }

 
  if (!admin.email) {
    return "გთხოვ მიუთითე იმეილი";
  } else {
    if (admin.email.length < 6) {
      return "იმეილი უნდა იყოს მინიმუმ 6 სიმბოლო";
    }
    const atIndex = admin.email.indexOf('@');
    if (atIndex === -1) {
      return "იმეილში უნდა იყოს '@' სიმბოლო";
    }
    const domainPart = admin.email.slice(atIndex + 1);
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