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



export interface CourierRouResponseType {
  id: string;
  resource: string;
  data: CourierType;
  createdAt: string;
  updatedAt: string;
}

export interface CourierResponseType extends CourierType {
  id: string;
}



