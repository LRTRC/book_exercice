describe("Parcourir un tableau composé d'objets", () => {

  /** Suite d'exercices afin d'apréhender les functions JS
   */


  test("30.1 Function constructor et opérateur new ", () => {

    /** L'opérateur 'new' permet de créer des objets
     * à partir d'une fonction constructor
     */

    function Car(make, model, year) { //Function constructor qui permet
      this.make = make               //de créer une classe d'objet
      this.model = model            //ici la classe "Car", avec des arguments
      this.year = year             //ici "make", "model" et "year"
    }

    const car1 = new Car('Renault', 'Twingo', 1999)
// ici on crée un objet de classe "Car", en attribuant des valeur à ses arguments

    console.log(car1)
    expect(car1.model).toEqual('Twingo')
    expect(car1.year).toEqual(1999)


    function Gens(nom, age, departement) {
      this.nom = nom
      this.age = age
      this.departement = departement
    }

    let gensPremier = new Gens('Louis', '27', '75')


    console.log(gensPremier.name)
    expect(gensPremier.nom).toEqual('Louis')
    expect(gensPremier.departement).toEqual('75')
    expect(gensPremier.departement).not.toEqual(75)
  })


//Héritage et chaîne de prototypes

  test("30.2 Chaine de prototypes et héritage des propriétés ", () => {

    /** Le property shadowing est la possibilité pour des objets d'hériter
     * des propriétés d'un objet prototype dans une chaine de prototypes
     */


    let f = function () {
      this.a = 1
      this.b = 2
    }
    let o = new f();

    f.prototype.b = 3;
    f.prototype.c = 4

    expect(o.a).toEqual(1)
    expect(o.b).toEqual(2)
    expect(f.prototype.b).toEqual(3)
    expect(o.c).toEqual(4)
    expect(o.d).toEqual(undefined)

  })

  test('...', () => {

    let x = {a: 10, m: 5}
    let y = Object.create(x)  //la méthode object.create() fait hériter à'lobjet z
    y.a = 40                 //les propriétés de l'objet prototype y

    let z = Object.create(y)

   // expect(z.a).toEqual(40)

    delete y.a                     //En utilisant l'opérateur delete, je supprime
    expect(y.a).toEqual(10) //la valeur de y.a mais récupère la valeur hérité
                                    // de x.a

  })


// Instance Properties


//Function.prototype.arguments

test('arguments', () => {

  function volumeParallelepipede(height, width, depth){
    return height * width * depth
    Array.from(arguments)

  }

  const height = 5
  const width = 3
  const depth = 6
  const volume = volumeParallelepipede(height, width, depth)// utilise les 3 const comme arguments de f()

  expect(volume).toEqual(90)
  expect(volumeParallelepipede.length).toEqual(3)// définit le nombre de paramètres attendus par la fonction

})


//Function.prototype.caller
//Function.prototype.displayName
//Function.prototype.length
//Function.prototype.name

//Instance Methods
//Function.prototype.apply(thisArg [, argsArray])
//Function.prototype.bind(thisArg[, arg1[, arg2[, ...argN]]])
//Function.prototype.call(thisArg[, arg1, arg2, ...argN])
//Function.prototype.toString()
//


// test("30. ", () => {
//
//   /**
//    */
//
//
//   console.log()
//   expect().toEqual()
//
// })


})
