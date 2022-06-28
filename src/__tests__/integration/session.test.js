const { User } = require('../../app/models')

describe('Authenticate', () => {
    
    test('the data is peanut butter', async () => {
        const user = User.create({
            name: "Adam Almeida",
            email: "test@gmail.com",
            password_hash: "123456"
        });

        expect(user.email).toBe("test@gmail.com");
      });
})
