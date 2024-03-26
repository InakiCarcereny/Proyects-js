const objeto = (name: string, edad: number) =>  {
  return `Hola soy ${name}, tengo ${edad}`
}

console.log(objeto('pedro', 4))

type Persona = {
  name: string
  age: number
  trabajo: string
}

const persona: Persona[] = [
  {
    name: 'pedro',
    age: 4,
    trabajo: 'programador'
  },
  {
    name: 'juan',
    age: 5,
    trabajo: 'diseñador'
  },
  {
    name: 'luis',
    age: 6,
    trabajo: 'arquitecto'
  },
  {
    name: 'jose',
    age: 7,
    trabajo: 'ingeniero'
  }
]


persona.map((item) => {
  console.log(`Hola soy ${item.name}, tengo ${item.age} años y soy ${item.trabajo}`)
})


type Persona2 = {
  name: string
  age: number
  trabajo: string
  estudios: string
}

const persona2: Persona2 = {
  name: 'pedro',
  age: 4,
  trabajo: 'programador',
  estudios: 'ingenieria'
}

function mostrarPersona(persona2: Persona2) {
  const {name, age, trabajo, estudios} = persona2

  return {
    name,
    age,
    trabajo,
    estudios
  }
}

const arr: (string | number | boolean)[] = [

]

arr.push(4)
arr.push('hola')
arr.push(true)



