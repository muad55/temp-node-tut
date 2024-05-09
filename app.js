// package=dependency=module

// npm - global command , comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>

//package.json -manifest file (stores important info about project/package)
//manual approach (create package.json in the root,create properties etc)
//npm init (step by step , press enter to skip)
//npm init -y (everything default)

//  Il s'agit d'un fichier JSON (JavaScript Object Notation) qui stocke des métadonnées essentielles sur votre projet, notamment :

// Nom du projet: Identifie votre projet de manière unique.
// Version du projet: Indique la version actuelle de votre projet.
// Description du projet: Fournit une brève description de votre projet.
// Mots-clés: Aide à la découverte de votre projet lors de recherches.
// Scripteurs: Définit des commandes personnalisées à exécuter à l'aide de npm run.
// Dépendances: Décrit les modules externes dont votre projet dépend pour fonctionner.
// Licence: Spécifie la licence sous laquelle votre projet est distribué.
// Point d'entrée: Indique le fichier JavaScript principal à exécuter lorsque vous lancez votre projet.
// Référentiels: Fournit des liens vers des dépôts de code sources externes.
// Fichiers de documentation: Indique l'emplacement de la documentation de votre projet.

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
