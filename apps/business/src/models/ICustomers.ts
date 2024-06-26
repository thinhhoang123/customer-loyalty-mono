export default interface ICustomers {
  id: string;
  name: string;
  gender: number;
  tier: string;
  points: {
    current: number;
    max: number;
  };
  phone: string;
  email: string;
  birthdate: Date;
}
