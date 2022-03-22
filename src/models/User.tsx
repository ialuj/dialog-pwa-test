interface User {
  _id: string,
  name: string,
  age: number,
  eyeColor: string,
  company: string,
  email: string,
  picture: string,
  friends: User[]
}

export default User;