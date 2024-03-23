import { Program } from '../types';

const typeToRoute = new Map([
  ['movie', 'movies'],
  ['series', 'tv-shows'],
]);

function programLink(program: Program): string {
  const section = typeToRoute.get(program.type);

  return `/${section}/${program.id}`;
}

export { programLink };
