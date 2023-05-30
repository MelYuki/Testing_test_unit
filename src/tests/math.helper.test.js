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

    })
})