interface Person {
  name: string
  id: string
  age: number
}

function fromNameToPerson (name: string): Person {
  return {
    name,
    age: 1,
    id: '1'
  }
}