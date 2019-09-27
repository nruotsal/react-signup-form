import faker from 'faker/locale/en'

/**
 * Generate random participants to show on the list.
 * In a real projects these would be loaded from the backend.
 */
export default (count: number) =>
  Array.from(Array(count).keys()).map(id => ({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber('0#0#######'),
    isEditing: false
  }))
