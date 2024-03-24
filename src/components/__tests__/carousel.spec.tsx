import { fireEvent, render, screen } from '@testing-library/react';
import { Carousel } from '../carousel';
import data from '../../../assets/data.json';

describe('Carousel tests', () => {
  it('should render carousel', () => {
    render(
      <Carousel
        aria-label="My carousel"
        displayMax={0}
        itemKey={() => 0}
        items={[]}
        onSelect={() => {}}
        renderItem={() => null}
      />,
    );

    const carouselElem = screen.getByRole('listbox');

    expect(carouselElem).toBeInTheDocument();
    expect(carouselElem).toHaveAttribute('aria-label', 'My carousel');
  });

  it('should render skeleton when loading is true', () => {
    render(
      <Carousel
        aria-label="My carousel"
        displayMax={6}
        itemKey={() => 0}
        items={[]}
        loading
        onSelect={() => {}}
        renderItem={() => null}
      />,
    );

    const carouselElem = screen.getByRole('listbox');
    const options = screen.getAllByRole('option');

    expect(carouselElem).toHaveAttribute('aria-busy', 'true');
    expect(options).toHaveLength(6);
    expect(
      options.every((opt) => opt.getAttribute('aria-disabled') === 'true'),
    ).toEqual(true);
  });

  it('should have focus when autoFocus is true', () => {
    render(
      <Carousel
        autoFocus
        aria-label="My carousel"
        displayMax={1}
        itemKey={(item) => item.id}
        items={data}
        onSelect={() => {}}
        renderItem={(item) => <article key={item.id}>{item.title}</article>}
      />,
    );

    const carouselElem = screen.getByRole('listbox');

    expect(carouselElem).toHaveFocus();
  });

  it('should render first three items', () => {
    render(
      <Carousel
        autoFocus
        aria-label="My carousel"
        displayMax={3}
        itemKey={(item) => item.id}
        items={data}
        onSelect={() => {}}
        renderItem={(item) => <article key={item.id}>{item.title}</article>}
      />,
    );

    const options = screen.getAllByRole('option');

    expect(options).toHaveLength(3);
    expect(options[0]).toHaveTextContent('Dr. Death');
    expect(options[1]).toHaveTextContent('This Way Up');
    expect(options[2]).toHaveTextContent('Power Book III: Raising Kanan');
  });

  it('should select second item on ArrowRight', () => {
    render(
      <Carousel
        autoFocus
        aria-label="My carousel"
        displayMax={3}
        itemKey={(item) => item.id}
        items={data}
        onSelect={() => {}}
        renderItem={(item) => <span>{item.title}</span>}
      />,
    );

    fireEvent.keyDown(screen.getByRole('listbox'), { key: 'ArrowRight' });

    const options = screen.getAllByRole('option');

    expect(options[0]).toHaveTextContent('Dr. Death');
    expect(options[1]).toHaveTextContent('This Way Up');
    expect(options[2]).toHaveTextContent('Power Book III: Raising Kanan');
    expect(screen.getByRole('option', { selected: true })).toEqual(options[1]);
  });

  it('should render and select last item on ArrowLeft', () => {
    render(
      <Carousel
        autoFocus
        aria-label="My carousel"
        displayMax={3}
        itemKey={(item) => item.id}
        items={data}
        onSelect={() => {}}
        renderItem={(item) => <span>{item.title}</span>}
      />,
    );

    fireEvent.keyDown(screen.getByRole('listbox'), { key: 'ArrowLeft' });

    const options = screen.getAllByRole('option');

    expect(options).toHaveLength(3);
    expect(options[0]).toHaveTextContent('Persepolis');
    expect(options[1]).toHaveTextContent('Dr. Death');
    expect(options[2]).toHaveTextContent('This Way Up');
    expect(screen.getByRole('option', { selected: true })).toEqual(options[0]);
  });

  it('should render fourth item after two ArrowRight keys', () => {
    render(
      <Carousel
        autoFocus
        aria-label="My carousel"
        displayMax={3}
        itemKey={(item) => item.id}
        items={data}
        onSelect={() => {}}
        renderItem={(item) => <span>{item.title}</span>}
      />,
    );

    const carouselElem = screen.getByRole('listbox');

    fireEvent.keyDown(carouselElem, { key: 'ArrowRight' });
    fireEvent.keyDown(carouselElem, { key: 'ArrowRight' });

    const options = screen.getAllByRole('option');

    expect(options).toHaveLength(3);
    expect(options[0]).toHaveTextContent('This Way Up');
    expect(options[1]).toHaveTextContent('Power Book III: Raising Kanan');
    expect(options[2]).toHaveTextContent('First Wives Club');
    expect(screen.getByRole('option', { selected: true })).toEqual(options[1]);
  });

  it('should call onSelect on Enter press', () => {
    const onSelect = jest.fn();

    render(
      <Carousel
        autoFocus
        aria-label="My carousel"
        displayMax={3}
        itemKey={(item) => item.id}
        items={data}
        onSelect={onSelect}
        renderItem={(item) => <span>{item.title}</span>}
      />,
    );

    const carouselElem = screen.getByRole('listbox');

    fireEvent.keyDown(carouselElem, { key: 'Enter' });
    fireEvent.keyDown(carouselElem, { key: 'ArrowRight' });

    expect(onSelect).toHaveBeenCalledWith({
      id: 67298,
      title: 'Dr. Death',
      description:
        'Dr. Death tells the terrifying true story of Dr. Christopher Duntsch (Joshua Jackson), a brilliant but sociopathic neurosurgeon whose patients leave his operating room either permanently maimed or dead, and the two doctors who set out to stop him.',
      type: 'series',
      image:
        'https://streamcoimg-a.akamaihd.net/000/672/98/67298-PosterArt-2039396c9e27d6271c96776414d6a38c.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg',
      rating: 'MA 15+',
      genre: 'Drama',
      year: 2021,
      language: 'English',
    });
  });
});
