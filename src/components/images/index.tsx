type ImagesProps = {
  name: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
};

function Images({ description, name, images }: ImagesProps) {
  return (
    <section className="images-section">
      <h2>{name}</h2>

      <p>{description}</p>

      <div className="images-container">
        {images.map((image, index) => (
          <figure key={`${image.src}-${image.alt}-${index}`}>
            <img src={image.src} alt={image.alt} />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Images;
export type { ImagesProps };
