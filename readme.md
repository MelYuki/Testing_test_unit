# Les différents types de tests

## Tests unitaires
    - Vérification des petites unités de code, indépendamment du reste
    - ex : Une fonction divisant deux nombres -> Vérifier qu'elle divise bien les deux nombres fournis. Si on veut gérer la division par 0, on fera alors un autre test.

## Tests d'intégration
    - On regroupe chaque partie testée unitairement (ou non) pour en faire un gros "module" à tester. On vérifie que tout l'ensemble fonctionne dans la globalité
    - ex : Tester toute la fonctionnalité de Login/Register dans son ensemble (Erreurs Formulaire, Ajout/Get en DB se fasse, Gestion du Token etc  etc)

## Tests de charge
    - Simuler une énorme charge de personnes/données/récupération de données sur notre site/app
    - Plusieurs niveaux : DB, Serveur, Site/App
    - Bibliothèques de simulation de charge

## Tests de validation
    - Comparer le cahier des charges à notre produit/nos fonctionnalités
    - Ca va de vérifier que le déroulement de toute une action se déroule correctement à vérifier qu'un bouton est bien carré, bleu et que quand on passe la souris dessus il devient vert fluo

# Tests unitaires
## Méthodologie : Le TDD (Test Driven Development)
Méthode de développement où on crée les tests avant de développer la moindre fonctionnalité.

Les trois règles d'or :
1) Écrire un test unitaire qui échoue (pas encore de code)
2) Écrire une seule assertion à la fois (on gère cas par cas) ex : l'ajout d'un produit, un test pour vérifier que l'ajout fonctionne, un test pour vérifier si le produit existe déjà, un test pour vérifier si le prix est correct etc etc
3) Écrire le code **minumum** pour que le test fonctionne -> Dans votre code, vous ne gérez pas les erreurs etc, vous devez juste faire en sorte que vote test passe


### Système de boucle : 
1) On écrit le test
2) Lancer le test -> Il échoue
3) Écrire le code mininum pour que le test passe
4) Lancer le test
    * Il fonctionne -> Retour à l'étape 1 avec un nouveau test
    * Il échoue -> Retour à l'étape 3, on corrige le code et on relance le test

<a href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cycle-global-tdd.png/1920px-Cycle-global-tdd.png">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cycle-global-tdd.png/1920px-Cycle-global-tdd.png" > </a>
    
# Tests d'intégration
## 4 Méthodes pour faire vos tests :
* Big Bang : On teste en même temps qu'on intègre -> Rapide mais ne tient pas la route sur les gros projets
* Top - Down : On déroule le programme de haut en bas -> Par ex controllers -> services -> db. Inconvénient : On doit mocker tout ce qui se trouve en dessous, on repère les erreurs de bas niveau tardivement
* Bottom - Up : L'inverse d'au dessus
* Mixed : Mélange des deux du dessus

# Doc
- TDD : https://fr.wikipedia.org/wiki/Test_driven_development

<hr>
<br><br><br>

# Test unitaire en NodeJS