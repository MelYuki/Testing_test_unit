// * On crée notre petite librairie Math avec quelques fonctions (add, div)

const MathHelper = {
    add : (nb1, nb2) => {
        return nb1 + nb2;
    },
 
    div : (nb1, nb2) => {
        if(nb2 === 0) {            
            throw new Error('Div by zero');
        }

        return nb1 / nb2;
    }
}

module.exports = MathHelper;