import './program-detail.css';

type ProgramDetailProps = {
  description: string;
  genre: string;
  image: string;
  language: string;
  rating: string;
  title: string;
  year: number;
};

const ProgramDetail = ({
  description,
  genre,
  image,
  language,
  rating,
  title,
  year,
}: ProgramDetailProps) => {
  return (
    <article className="program-detail">
      <h1 className="program-detail__title">{title}</h1>
      <div className="program-detail__attributes">
        {rating} | {year} | {genre} | {language}
      </div>
      <div className="program-detail__description">{description}</div>
      <div className="program-detail__poster">
        <img
          className="program-detail__poster-image"
          src={image}
          alt={`${title} cover image`}
        />
      </div>
    </article>
  );
};

export { ProgramDetail };
