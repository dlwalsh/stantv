import { programLink } from '../program-utils';

describe('Number utils', () => {
  it('should return tv-shows link', () => {
    expect(
      programLink({
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
      }),
    ).toEqual('/tv-shows/26702');
  });

  it('should return movies link', () => {
    expect(
      programLink({
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
      }),
    ).toEqual('/movies/3019990');
  });
});
