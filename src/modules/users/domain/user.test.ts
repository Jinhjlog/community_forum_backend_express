import { faker } from '@faker-js/faker';
import { User } from './user';

describe('User', () => {
  it('사용자를 생성할 수 있어야 합니다.', () => {
    const user = new User({
      email: faker.internet.email(),
      password: faker.internet.password(),
      phone: '010-1234-5678',
      username: faker.internet.userName(),
    });

    expect(user).toBeDefined();
  });

  it('동일한 사용자인지 확인할 수 있어야 합니다.', () => {
    const user = new User({
      id: '1',
      email: 'test@email.com',
      password: faker.internet.password(),
      phone: '010-1234-5678',
      username: faker.internet.userName(),
    });

    const expectedUser = new User({
      id: '1',
      email: 'test2@gmail.com',
      password: faker.internet.password(),
      phone: '010-1234-5678',
      username: faker.internet.userName(),
    });

    expect(user.equals(expectedUser)).toBe(true);
  });
});
