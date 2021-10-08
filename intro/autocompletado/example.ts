interface Person {
  id: string
  name: string
  age: number
}

const fromNameToPerson = (name: string): Person => {
  return {
    // El IDE te sugerirá los campos para tener un "Person" completo
  }
}
