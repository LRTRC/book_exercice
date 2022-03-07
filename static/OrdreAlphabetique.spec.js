describe('HPGB', () => {

  /** Manipuler une table d'objets de manière basique
   */


  test('13.1 sort()', () => {
    /** Trier par ordre alphabétique la table avec la fonction sort()
     */

    const l = ['H', 'P', 'G', 'B']
    // let s = l.sort();
    const F = (l) => l.sort()
    expect(F(l)).toStrictEqual(['B', 'G', 'H', 'P'])
  })


  test('13.2 longueur', () => {
    /** Contrôler la longueur de la table avec .length
     */

    const l = ['H', 'P', 'G', 'B']
    expect(l.length).toStrictEqual(4)
  })


  test('14. TOTO', () => {
    /** Trouver une caractère particulier dans une string
     */

    const t = 'TOTO'
    expect(t.charAt(2)).toStrictEqual('T')
  })


  test("15.1 Trouver l'index d'un objet par la valeur d'une clé", () => {
    /** Avec la valeur "000001" de la clé "code: ", retrouver
     * l'index de l'objet
     */

    const myArray = [{
      code: '000002',
      reference: 'BA',
      goal: '70'
    },
      {
        code: '000001',
        reference: 'AB',
        goal: '75'
      },
      {
        code: '000003',
        reference: 'CD',
        goal: '70'
      },]

    expect(myArray.map((e) => e.code).indexOf('000001')).toStrictEqual(1)
  })


  test('15.2 Sixdigits', () => {
    /** Vérifier que la valeur "000001" de la clé "code :"
     * contient bien 6 chiffres
     */

    const myArray = [{
      code: '000002',
      reference: 'BA',
      goal: '70'
    },
      {
        code: '000001',
        reference: 'AB',
        goal: '75'
      },
      {
        code: '000003',
        reference: 'CD',
        goal: '70'
      },]

    expect(myArray.map((e) => e.code.length)).toStrictEqual([6, 6, 6])

  })


  test('16.1 Sort Goals', () => {
    /** Trier les objets de la table, grâce à la fonction sort(), par les valeurs
     * de la clé "goal: "
     */

    const myArray = [{
      code: '008020',
      reference: 'BA',
      goal: 79
    },
      {
        code: '000012',
        reference: 'AB',
        goal: 75
      },
      {
        code: '000002',
        reference: 'CD',
        goal: 70
      },]

    expect(myArray.map((e) => e.goal).sort()).toStrictEqual([70, 75, 79])

  })


  test('16.2 Sort code', () => {
    /** Trier les objets de la table, grâce à la fonction sort(), par les valeurs
     * de la clé "code:
     */

    const myArray = [{
      code: '008020',
      reference: 'BA',
      goal: '79'
    },
      {
        code: '000012',
        reference: 'AB',
        goal: '75'
      },
      {
        code: '000002',
        reference: 'CD',
        goal: '70'
      },]

    expect(myArray.map((e) => e.code).sort()).toStrictEqual(['000002', '000012', '008020'])

  })


  test('egalité', () => {
    /** "==" convertie les valeurs pour vérifier la comparaison, même si
     * les primitives sont différentes
     * "===" est une comparaison stricte entre primitives similaire.
     */

    expect(2 == '2').toBe(true)
    expect(2 === '2').toBe(false)
  })

})


