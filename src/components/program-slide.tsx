import { Link } from 'react-router-dom';
import './program-slide.css';

type ProgramSlideProps = {
  href: string;
  image: string;
  title: string;
};

const ProgramSlide = ({ href, image, title }: ProgramSlideProps) => {
  return (
    <Link to={href} tabIndex={-1}>
      <img
        className="program-slide__image"
        src={image}
        alt={`${title} cover image`}
      />
    </Link>
  );
};

export { ProgramSlide };
