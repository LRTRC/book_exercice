describe('17 Créer une fonction que génére des nombres premiers', () => {

  /** A l'aide d'une fonction et des boucles
   * créer des valeurs pour un tableau,les échantillonner ou retrouver
   * des valeurs données
   */


  test('17.1 Vérifier les 10 premiers avec Slice', () => {
    /** La function génère des premiers nombres premiers en testant
     * les entier de 2 à 1000
     */

    function f() {
      let l = []
      let stop = 1000
      for (let i = 2; i <= stop; i++) {
        let aux = []
        for (let h = 1; h <= stop; h++) { //Si le reste du nombre i divisé, de 1 à 1000,
          if ((i % h === 0) && (i / i === 1)) { // avec % modulo ne produit que 2 * 0
            aux.push(i % h) // (0 stockés provisoirement dans aux[]) alors i est ajouté
          }                 // à la liste des nombres premiers l = []
        }
        if (aux.length <= 2)
          l.push(i)

      }
      return l
    }

    let base = f()
    let s = base.slice(0, 10) // On utilise .slice pour récupérer un échantillon
                              // de l'index 0 à 10
    expect(s).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
  })

  test('17.2 Vérifier les 10 premiers', () => {
    /** Autre technique pour ne récupérer que les 10 premiers
     * résultats de la fonction
     */

    function f() {
      let l = []
      let stop = 1000
      for (let i = 2; i <= stop; i++) {
        let aux = []
        for (let h = 1; h <= stop; h++) {
          if ((i % h === 0) && (i / i === 1)) {
            aux.push(i % h)
          }
        }
        if (aux.length <= 2)  // on récupère les 10 premiers nombres premiers de l[]
          l.push(i)          // en arrêtant la boucle quand la liste à une longueur
        if (l.length === 10) // de 10
          break
      }
      return l
    }

    console.log(f())
    expect(f()).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
  })

  test('17.3 Vérifier le 22ème et le 32ème nb premier', () => {
    /** On lance la fonction et on recherche par l'index les valeurs du 21 et 31
     */

    function f() {
      let l = []
      let stop = 1000
      for (let i = 2; i <= stop; i++) {
        let aux = []
        for (let h = 1; h <= stop; h++) {
          if ((i % h === 0) && (i / i === 1)) {
            aux.push(i % h)
          }
        }
        if (aux.length <= 2)
          l.push(i)
      }
      return l
    }

    console.log(f())
    let base = f()
    expect(base[21]).toBe(79)
    expect(base[31]).toBe(131)
  })

  test('22. Fonction de Mat', () => {
    /** Reproduire la fonction php de Mat en JS
     */

    function isPrem(number) {
      if (number < 2) {
        return false;
      }
      for (let i = 2; i < number - 1; i++) {
        if (0 === number % i) {
          return false;
        }
      }
      return true;
    }

    let i = 1;
    let numbers = [];
    do {
      if (isPrem(i)) {
        numbers.push(i)
      }
      i++;
    } while (i < 200);


    expect(numbers).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199])
  })
})
