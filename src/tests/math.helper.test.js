//Import du MathHelper
const MathHelper = require("../helpers/math.helper");

const assert = require("assert");

// describe → sert à décrire nos tests
describe('Testing Math Helper', () => {

    describe('Addition Method', () => {

        // it → Sert à faire un test
        it('Addition de deux nombres', () => {
            // arrange (opt) → données dont on a besoin pour effectuer le test
            const nb1 = 40;
            const nb2 = 2;

            // expect → le résultat attendu
            const expect = 42;

            // action (+ error) -> utilisation de la fonctionnalité (method) à tester
            const result = MathHelper.add(nb1, nb2);

            // assert (opt) -> Comparaison entre le résultat obtenu et ce qui était expect (attendu)
            assert.equal(result, expect);
        })
    });

    describe('Division Method' , () => {

        it('Division de deux nombres', () => {
            // arrange
            const nb1 = 40;
            const nb2 = 2;

            // expect
            const expect = 20;

            // action
            const result = MathHelper.div(nb1, nb2);

            // assert
            assert.equal(result, expect);
        });

        it('Division par 0', () => {
            // arrange
            const nb1 = 40;
            const nb2 = 0;

            // expect
            const expectError = new Error('Div by zero');

            // action + assert
            // vérifier que la fonction lancée dans le callback va propoquer l'erreur passée en second param
            assert.throws(() => {
                const result = MathHelper.div(nb1, nb2);
            }, expectError)
        });

    })
})