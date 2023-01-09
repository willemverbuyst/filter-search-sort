export interface Person {
  _id: string;
  firstName: string;
  surname: string;
  age: number;
  eyeColor: string;
  gender: "male" | "female";
  company: string;
  email: string;
  married: boolean;
  birthDate: Date;
}
