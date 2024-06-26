'use server';
import { faker } from '@faker-js/faker';
import ICustomers from '../../models/ICustomers';

export default async function getListCustomer(): Promise<ICustomers[]> {
  const maxPoint = faker.number.int({ min: 100, max: 1000 });
  const data = faker.helpers.multiple(
    () => {
      return {
        id: faker.string.uuid(),
        name: faker.internet.userName(),
        gender: faker.number.int({ min: 0, max: 2 }),
        tier: faker.string.fromCharacters([
          'Bronze',
          'Silver',
          'Gold',
          'Dimond',
        ]),
        points: {
          current: faker.number.int({ min: 0, max: maxPoint }),
          max: maxPoint,
        },
        phone: faker.phone.number(),
        email: faker.internet.email(),
        birthdate: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
      };
    },
    {
      count: 50,
    }
  );

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, 1000)
  );
}
