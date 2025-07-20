export interface DaySchedule {
  tag: string;
  startHour: string;
  startMinute: string;
  endHour: string;
  endMinute: string;
}
export interface CourierType {
  role: string;
  firstName: string;
  lastName: string;
  pid: string;
  phoneNumber: string;
  email: string;
  password: string;
  profileImage: string;
  vehicle: string;
  workingDays: DaySchedule[];
}






