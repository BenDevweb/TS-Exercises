//Utilisez les génériques proposés par TypeScript
//Les génériques sont tellement intéressants que TypeScript propose toute une liste de génériques “natifs”. Et vous connaissez déjà le premier que nous allons voir ! En effet, Array  est un générique. Si nous devions le définir nous-même, voici comment on pourrait l’écrire :
type Array<T> = T[];