import { render, screen } from '@testing-library/react';
import { ProgramDetail } from '../program-detail';

describe('ProgramDetail', () => {
  it('should render carousel', () => {
    render(
      <ProgramDetail
        title="The Nest"
        description="A wealthy couple make a pact with a troubled teenage girl. But will this deal fulfil their dreams, or assure mutual destruction? An emotional thriller about love, trust and the true cost of buying whatever you want."
        image="https://streamcoimg-a.akamaihd.net/000/601/50/60150-PosterArt-156ce8779e10cea3cdd77c34036a9c6f.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg"
        rating="M"
        genre="Thriller"
        year={2020}
        language="English"
      />,
    );

    const articleElem = screen.getByRole('article');

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'The Nest',
    );
    expect(articleElem).toHaveTextContent(
      'A wealthy couple make a pact with a troubled teenage girl. But will this deal fulfil their dreams, or assure mutual destruction? An emotional thriller about love, trust and the true cost of buying whatever you want.',
    );
    expect(articleElem).toHaveTextContent('M | 2020 | Thriller | English');
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://streamcoimg-a.akamaihd.net/000/601/50/60150-PosterArt-156ce8779e10cea3cdd77c34036a9c6f.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg',
    );
  });
});
