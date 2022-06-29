const { User } = require("../../src/app/models");

it('should return user create', async () => {
  const user = await User.create({
    name: "Adam Almeida",
    email: "test@gmail.com",
    password_hash: "123456",
  });

  await expect(user.email).toBe("test@gmail.com");
});
