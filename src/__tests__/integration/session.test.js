const { User } = require("../../app/models")

describe('Authenticate', () => {
    
    it('should sum two numbers', async() => {
       const user =  await User.create({
            name: 'Adam Almeida',
            email: 'adam@gmail.com',
            password_hash: '123456789'
        })

        console.log(user)

        expect(user.email).toBe('adam@gmail.com')
    })
})
