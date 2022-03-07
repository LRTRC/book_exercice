describe('Fibonacci', () => {

  /** Créer et manipuler une fonction qui génère des valeurs
   * selon un algorithme connu
   */


  test('12.1 Suite de Fibonacci', () => {
    /** Générer la suite de Fibonacci à l'aide d'une fonction
     * sans les valeurs de départ n1 et n2 implémentés dans la table
     */

    let x = 0
    const n = []

    const Fibonacci = () => {
      if (x === 0) {  // On démarre la suite en implémentant 0 à la table
        n.push(x)
      }
      if (n[0] === 0) { // Si la valeur 0 est déjà au premier index
        x += 1          // on incrémente la variable et on ajoute à en deuxième
        n.push(x)       // position de la table
      } else (n[1] === 1)
      x = n[n.length - 1] + n [n.length - 2] // on implémente la 3ème valeur
      n.push(x)                              // par la somme des deux dernières
                                             // valeurs de la table
      for (let i = x; x < 144; i++) {        // on boucle selon la formule de
        x = n[n.length - 1] + n[n.length - 2]// Fibonacci : F(n)= F(n-1)+F(n-2)
        n.push(x)
      }
      return n
    }

    expect(Fibonacci()).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144])
  })


  test('12.2 Test Fibonacci', () => {
    /** Vérifier que "433494437" est bien situé à l'index 43 de la suite
     */

    let x = 0
    const n = []

    const Fibonacci = () => {
      if (x === 0) {
        n.push(x)
      }
      if (n[0] === 0) {
        x += 1
        n.push(x)
      } else (n[1] === 1)
      x = n[n.length - 1] + n [n.length - 2]
      n.push(x)

      for (let i = x; x < 433494437; i++) {
        x = n[n.length - 1] + n[n.length - 2]
        n.push(x)
      }
      const index = n.findIndex(e => e === 433494437) // On crée une variable et
      return index                          // grâce à la fonction de callback
    }                                      // .findIndex, on retrouver l'index
                                          // de la valeur "433494437"
    expect(Fibonacci()).toStrictEqual(43)
  })
})


