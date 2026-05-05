export type WineStatus =
  | 'sob consulta'
  | 'seleção reservada'
  | 'rótulo de referência'
  | 'curadoria privada'

export interface Wine {
  id: number
  name: string
  region: string
  country: string
  status: WineStatus
  image: string
  alt: string
  objectPosition?: string
}

export const wines: Wine[] = [
  {
    id: 1,
    name: 'Château Mouton Rothschild',
    region: 'Pauillac · Bordeaux',
    country: 'França',
    status: 'rótulo de referência',
    image: '/assets/mouton.jpg',
    alt: 'Château Mouton Rothschild — garrafa icônica Pauillac, Bordeaux',
    objectPosition: 'center center',
  },
  {
    id: 2,
    name: 'Château Margaux',
    region: 'Margaux · Bordeaux',
    country: 'França',
    status: 'seleção reservada',
    image: '/assets/margaux.jpg',
    alt: 'Château Margaux — Premier Grand Cru Classé, Bordeaux',
    objectPosition: 'center center',
  },
  {
    id: 3,
    name: 'Château Haut-Brion',
    region: 'Pessac-Léognan · Bordeaux',
    country: 'França',
    status: 'sob consulta',
    image: '/assets/haut-brion.jpg',
    alt: 'Château Haut-Brion — Cru Classé des Graves, Pessac-Léognan',
    objectPosition: 'center center',
  },
  {
    id: 4,
    name: 'Château Lafite Rothschild',
    region: 'Pauillac · Bordeaux',
    country: 'França',
    status: 'curadoria privada',
    image: '/assets/lafite.jpg',
    alt: 'Château Lafite Rothschild — Pauillac, safras icônicas',
    objectPosition: 'center center',
  },
  {
    id: 5,
    name: 'Masseto',
    region: 'Toscana',
    country: 'Itália',
    status: 'sob consulta',
    image: '/assets/masseto.jpg',
    alt: 'Masseto Toscana IGT — Tenuta dell\'Ornellaia, rótulo colecionável',
    objectPosition: 'center center',
  },
  {
    id: 6,
    name: 'Joseph Phelps Insignia',
    region: 'Napa Valley · Califórnia',
    country: 'EUA',
    status: 'seleção reservada',
    image: '/assets/insignia.jpg',
    alt: 'Joseph Phelps Insignia — Napa Valley Estate Grown, edição limitada',
    objectPosition: 'center center',
  },
]
