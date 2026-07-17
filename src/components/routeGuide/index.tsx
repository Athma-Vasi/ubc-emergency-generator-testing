type RouteGuideProps = {
  routeName: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
};

function RouteGuide({ description, routeName, images }: RouteGuideProps) {
  return (
    <section>
      <h2>Route Guide</h2>

      <h3>{routeName}</h3>

      <p>{description}</p>

      <div className="route-guide-images">
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

export default RouteGuide;
export type { RouteGuideProps };
