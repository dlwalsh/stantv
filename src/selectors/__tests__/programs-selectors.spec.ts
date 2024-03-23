import { selectProgramsByType } from '../programs-selectors';
import type { Program } from '../../types';

const data: Program[] = [
  {
    id: 26702,
    title: 'Black Monday',
    description:
      'BLACK MONDAY takes us back to October 19, 1987 – aka Black Monday, the worst stock market crash in the history of Wall Street.',
    type: 'series',
    image:
      'https://streamcoimg-a.akamaihd.net/000/267/02/26702-PosterArt-fa4764f2e5af823683130cec70f227ae.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg',
    rating: 'MA 15+',
    genre: 'Comedy',
    year: 2018,
    language: 'English',
  },
  {
    id: 3019990,
    title: "Harry Potter and the Philosopher's Stone",
    description:
      "11-year-old orphan Harry Potter discovers he's a wizard and enrols in Hogwarts, school of wizardry. There he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
    type: 'movie',
    image:
      'https://streamcoimg-a.akamaihd.net/000/301/9990/3019990-PosterArt-5984e294f596ed0ad0c006162770e080.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg',
    rating: 'PG',
    genre: 'Fantasy',
    year: 2001,
    language: 'English',
  },
  {
    id: 67543,
    title: 'Blindspotting',
    description:
      "In this comedy drama series, Ashley's partner of 12 years and father of their son, Miles, is suddenly incarcerated. She's left to navigate a chaotic and humorous existential crisis when she's forced to move in with Miles' mother and half-sister.",
    type: 'series',
    image:
      'https://streamcoimg-a.akamaihd.net/000/675/43/67543-PosterArt-44056c0edeaae6d3dcd6874e2939c2f6.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg',
    rating: 'MA 15+',
    genre: 'Comedy',
    year: 2021,
    language: 'English',
  },
  {
    id: 67542,
    title: 'Drag Race España',
    description:
      "The Spanish adaptation of the beloved Drag Race franchise is looking for Spain's first Drag Race Superstar. Hosted by Spanish drag star Supremme de Luxe, with Javier Calvo, Javier Ambrossi \u0026 Ana Locking on the panel. (Spanish with English Subtitles)",
    type: 'series',
    image:
      'https://streamcoimg-a.akamaihd.net/000/675/42/67542-PosterArt-31c442575a5b2142e4f6f8bd4b27b635.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg',
    rating: 'MA 15+',
    genre: 'Reality',
    year: 2021,
    language: 'Spanish',
  },
  {
    id: 60150,
    title: 'The Nest',
    description:
      'A wealthy couple make a pact with a troubled teenage girl. But will this deal fulfil their dreams, or assure mutual destruction? An emotional thriller about love, trust and the true cost of buying whatever you want.',
    type: 'series',
    image:
      'https://streamcoimg-a.akamaihd.net/000/601/50/60150-PosterArt-156ce8779e10cea3cdd77c34036a9c6f.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg',
    rating: 'M',
    genre: 'Thriller',
    year: 2020,
    language: 'English',
  },
  {
    id: 2993105,
    title: 'The Transporter Refuelled',
    description:
      "Frank Martin, a former special ops mercenary, is living a less perilous life. But when he's engaged by a cunning femme fatale, he must use his covert expertise and knowledge in a dangerous game of chess to bring down a Russian crime lord.",
    type: 'movie',
    image:
      'https://streamcoimg-a.akamaihd.net/000/299/3105/2993105-PosterArt-7005562eb1f40b180ae93a4c99606d76.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg',
    rating: 'MA 15+',
    genre: 'Action',
    year: 2015,
    language: 'English',
  },
];

describe('Programs selectors', () => {
  it('should return all the data', () => {
    expect(selectProgramsByType.resultFunc(data, undefined)).toStrictEqual(
      data,
    );
  });

  it('should return the programs of type movie', () => {
    expect(selectProgramsByType.resultFunc(data, 'movie')).toStrictEqual([
      {
        id: 3019990,
        title: "Harry Potter and the Philosopher's Stone",
        description:
          "11-year-old orphan Harry Potter discovers he's a wizard and enrols in Hogwarts, school of wizardry. There he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
        type: 'movie',
        image:
          'https://streamcoimg-a.akamaihd.net/000/301/9990/3019990-PosterArt-5984e294f596ed0ad0c006162770e080.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg',
        rating: 'PG',
        genre: 'Fantasy',
        year: 2001,
        language: 'English',
      },
      {
        id: 2993105,
        title: 'The Transporter Refuelled',
        description:
          "Frank Martin, a former special ops mercenary, is living a less perilous life. But when he's engaged by a cunning femme fatale, he must use his covert expertise and knowledge in a dangerous game of chess to bring down a Russian crime lord.",
        type: 'movie',
        image:
          'https://streamcoimg-a.akamaihd.net/000/299/3105/2993105-PosterArt-7005562eb1f40b180ae93a4c99606d76.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg',
        rating: 'MA 15+',
        genre: 'Action',
        year: 2015,
        language: 'English',
      },
    ]);
  });

  it('should return the programs of type series', () => {
    expect(selectProgramsByType.resultFunc(data, 'series')).toStrictEqual([
      {
        id: 26702,
        title: 'Black Monday',
        description:
          'BLACK MONDAY takes us back to October 19, 1987 – aka Black Monday, the worst stock market crash in the history of Wall Street.',
        type: 'series',
        image:
          'https://streamcoimg-a.akamaihd.net/000/267/02/26702-PosterArt-fa4764f2e5af823683130cec70f227ae.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg',
        rating: 'MA 15+',
        genre: 'Comedy',
        year: 2018,
        language: 'English',
      },
      {
        id: 67543,
        title: 'Blindspotting',
        description:
          "In this comedy drama series, Ashley's partner of 12 years and father of their son, Miles, is suddenly incarcerated. She's left to navigate a chaotic and humorous existential crisis when she's forced to move in with Miles' mother and half-sister.",
        type: 'series',
        image:
          'https://streamcoimg-a.akamaihd.net/000/675/43/67543-PosterArt-44056c0edeaae6d3dcd6874e2939c2f6.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg',
        rating: 'MA 15+',
        genre: 'Comedy',
        year: 2021,
        language: 'English',
      },
      {
        id: 67542,
        title: 'Drag Race España',
        description:
          "The Spanish adaptation of the beloved Drag Race franchise is looking for Spain's first Drag Race Superstar. Hosted by Spanish drag star Supremme de Luxe, with Javier Calvo, Javier Ambrossi \u0026 Ana Locking on the panel. (Spanish with English Subtitles)",
        type: 'series',
        image:
          'https://streamcoimg-a.akamaihd.net/000/675/42/67542-PosterArt-31c442575a5b2142e4f6f8bd4b27b635.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg',
        rating: 'MA 15+',
        genre: 'Reality',
        year: 2021,
        language: 'Spanish',
      },
      {
        id: 60150,
        title: 'The Nest',
        description:
          'A wealthy couple make a pact with a troubled teenage girl. But will this deal fulfil their dreams, or assure mutual destruction? An emotional thriller about love, trust and the true cost of buying whatever you want.',
        type: 'series',
        image:
          'https://streamcoimg-a.akamaihd.net/000/601/50/60150-PosterArt-156ce8779e10cea3cdd77c34036a9c6f.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg',
        rating: 'M',
        genre: 'Thriller',
        year: 2020,
        language: 'English',
      },
    ]);
  });
});
