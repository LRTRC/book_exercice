describe('Utiliser le Matchers adéquat dans ' +
  'de multiples situations', () => {

  test('18.1 Variables de types différents ou similaires', () => {
// Vérifier le produit de 5 ainsi que les types primitifs des valeurs

    const intA = 5
    const intB = '5'
    const intC = 25
    const stringA = '25'

    expect(intA).not.toBe(intB) // instances distinctes
    expect(intA * intB).toStrictEqual(intC) // number*string = number
    expect(intB * intB).toStrictEqual(intC) // string*string = number
    expect(intB * intB).not.toStrictEqual(stringA) // string*string != string
    expect(typeof stringA).toBe('string') // intA est une string
    expect(typeof stringA).not.toBe('number') // intA n'est pas un number

  })


  test('18.2 push an array', () => {
// Ajouter une clé-valeur à un objet

    const objetUn = {
      a: 5,
      b: 3
    }
    objetUn.c = 7

    expect(objetUn).toEqual({a: 5, b: 3, c: 7})
    expect(typeof objetUn).toBe('object')
    expect(typeof objetUn).not.toBe('string')

  })


  test('18.3 modulo result 1', () => {
// Vérifier le reste d'un quotien avec modulo % ainsi que les types primitifs
    // des variables
    const a = 5
    const b = 2

    expect(a % b).toEqual(1)
    expect(typeof a).toBe('number')
    expect(typeof b).not.toBe('string')
  })


  test("18.4 longueur de l'array 10", () => {
// Vérifier la longueur d'un tableau ainsi que le type primitif de la variable
    const colors = ['jaune', 'bleu', 'vert', 'rouge', 'orange', 'violet', 'noir',
      'blanc', 'marron', 'turquoise']

    expect(colors.length).toBe(10)
    expect(typeof colors).toBe('object')
    expect(typeof colors).not.toBe('string')
  })


  test('18.5 comparer deux array', () => {
// Vérifier l'égalité de deux tableaux d'objets sans le matcher .toStrictEqual
    // ainsi que le type primitif

    const tableOne = [{a: 5, b: 3,}, {a: 5, b: 3}, {a: 5, b: 3}]
    const tableTwo = [{a: 5, b: 3,}, {a: 5, b: 3}, {a: 5, b: 3}]

    expect(tableOne).toMatchObject(tableTwo)
    expect(tableOne).toEqual(expect.arrayContaining(tableTwo))
    expect(tableOne).toEqual(expect.any(Array))
  })


  test('18.6 Division', () => {
// Vérifier la strict égalité de c = a / b ainsi que son type primitif

    const a = 2
    const b = 5
    const c = a / b

    expect(c).toStrictEqual(0.4)
    expect(c).toEqual(expect.any(Number))
  })


  test('18.7 Sum', () => {
// Vérifier la strict égalité de d = a + b + c ainsi que son type primitif

    const a = 0.25
    const b = 0.5
    const c = 1
    const d = a + b + c
    expect(d).toStrictEqual(1.75)
    expect(d).toEqual(expect.any(Number))
  })


  test('18.8 Matching', () => {
// Vérifier que deux objet soit similaire

    const a = ['bc4baf4a-79c8-11ec-90d6-0242ac120003']
    const b = ['bc4baf4a-79c8-11ec90d6-0242ac120003']


    expect(a).not.toStrictEqual(b)
    expect(typeof b).toBe('object')
    expect(b).toEqual(expect.objectContaining(b))
    expect(b).not.toMatchObject(a)
  })


  test('19.1 greater or lesser', () => {
// Vérifier que "a" est supérieur à "b" et que c'est une valeur numérique
    const a = 1
    const b = 2

    expect(b).toBeGreaterThan(a)
    expect(b).not.toBeLessThanOrEqual(a)
    expect(b).not.toEqual(expect.any(String))

  })


  test('19.2 lesser or equal', () => {
// vérifier que a n'est pas supérieur ou égale à b et que c'est une valeur numérique
    const a = 6
    const b = 5

    expect(b).not.toBeGreaterThan(a)
    expect(b).toBeLessThanOrEqual(a)
    expect(b).toEqual(expect.any(Number))

  })


  test('19.3 longueur array bis', () => {
// Vérifier que la longueur du tableau "a" est supérieur à 2
// et que "a" est de type Array
    const a = [0, 1, 2, 3, 4, 5]

    expect(a.length).toBeGreaterThan(2)
    expect(a).toEqual(expect.any(Array))

  })


  test('19.4 divider lesser than', () => {
// vérifier que le quotient de 2/5 est supérieur à 1,
// que a n'est pas égale à b et que le quotient est bien une valeur numérique
    const a = 2
    const b = 5
    const c = a / b

    expect(a).toBeGreaterThan(1)
    expect(a).not.toEqual(c)
    expect(a).toEqual(expect.any(Number))

  })


  test('21. Contain', () => {
    /** Dans les listes "shoppingList", "fruits", "nEntierNaturels"
     * vérifier si les éléments demandés sont présents.
     * */

// déclarer les listes en constantes.

    const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk',]
    const fruits = ['banana', 'pommes', 'ananas', 'paper towels', 'tomate', 'cassis']
    const nEntiersNaturels = [, 4, 5, 3, 1, -3, 6, 8, 7, -2, 3, 3, 3.3, 3, 3, 2, 4]

// Vérifier si "shoppingList" contient ou non les éléments "milk" et "water".

    expect(shoppingList).toContain('milk')
    expect(shoppingList).not.toContain('water')

// Vérifier si "fruits" contient ou non les éléments expected

    expect(fruits).toContain('banana', 'pommes', 'ananas', 'paper towels', 'tomate', 'cassis')
    expect(fruits).not.toContain('patate')

// Vérifier dans "nEntierNaturels" pour chaque élément
// l'index, si numérique entier et la valeur.

    expect(nEntiersNaturels[0]).not.toEqual(expect.any(Number.isInteger))
    expect(nEntiersNaturels[0]).toBeUndefined()

    expect(Number.isInteger(nEntiersNaturels[1])).toEqual(true)
    expect(nEntiersNaturels[1]).toEqual(4)

    expect(Number.isInteger(nEntiersNaturels[2])).toEqual(true)
    expect(nEntiersNaturels[2]).toEqual(5)

    expect(Number.isInteger(nEntiersNaturels[3])).toEqual(true)
    expect(nEntiersNaturels[3]).toEqual(3)

    expect(Number.isInteger(nEntiersNaturels[4])).toEqual(true)
    expect(nEntiersNaturels[4]).toEqual(1)

    expect(Number.isInteger(nEntiersNaturels[5])).toEqual(true)
    expect(nEntiersNaturels[5]).toEqual(-3)

    expect(Number.isInteger(nEntiersNaturels[6])).toEqual(true)
    expect(nEntiersNaturels[6]).toEqual(6)

    expect(Number.isInteger(nEntiersNaturels[7])).toEqual(true)
    expect(nEntiersNaturels[7]).toEqual(8)

    expect(Number.isInteger(nEntiersNaturels[8])).toEqual(true)
    expect(nEntiersNaturels[8]).toEqual(7)

    expect(Number.isInteger(nEntiersNaturels[9])).toEqual(true)
    expect(nEntiersNaturels[9]).toEqual(-2)

    expect(Number.isInteger(nEntiersNaturels[10])).toEqual(true)
    expect(nEntiersNaturels[10]).toEqual(3)

    expect(Number.isInteger(nEntiersNaturels[11])).toEqual(true)
    expect(nEntiersNaturels[11]).toEqual(3)

    expect(Number.isInteger(nEntiersNaturels[12])).toEqual(false)
    expect(nEntiersNaturels[12]).toEqual(3.3)

    expect(Number.isInteger(nEntiersNaturels[13])).toEqual(true)
    expect(nEntiersNaturels[13]).toEqual(3)

    expect(Number.isInteger(nEntiersNaturels[14])).toEqual(true)
    expect(nEntiersNaturels[14]).toEqual(3)

    expect(Number.isInteger(nEntiersNaturels[15])).toEqual(true)
    expect(nEntiersNaturels[15]).toEqual(2)

    expect(Number.isInteger(nEntiersNaturels[16])).toEqual(true)
    expect(nEntiersNaturels[16]).toEqual(4)


    expect(nEntiersNaturels).toContain(5)


  })
})
