import { useEffect, useRef, useState } from "react";

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
  const [selectedImage, setSelectedImage] = useState<ImagesProps["images"][number] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (selectedImage && !dialog.open) {
      dialog.showModal();
    }

    if (!selectedImage && dialog.open) {
      dialog.close();
    }
  }, [selectedImage]);

  return (
    <>
      <section className="images-section">
        <h2>{name}</h2>

        <p>{description}</p>

        <div className="images-container">
          {images.map((image, index) => (
            <figure key={`${image.src}-${image.alt}-${index}`}>
              <button
                className="image-button"
                type="button"
                onClick={() => setSelectedImage(image)}
                aria-label={`View full-size image: ${image.alt}`}
              >
                <img src={image.src} alt={image.alt} />
              </button>
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <dialog
        ref={dialogRef}
        className="image-dialog"
        aria-labelledby="image-dialog-title"
        onCancel={() => setSelectedImage(null)}
        onClose={() => setSelectedImage(null)}
      >
        {selectedImage && (
          <div className="image-dialog-content">
            <div className="image-dialog-header">
              <h2 id="image-dialog-title">{selectedImage.alt}</h2>
              <button
                className="image-dialog-close"
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close full-size image"
              >
                Close
              </button>
            </div>
            <div className="image-dialog-scroll-area">
              <img src={selectedImage.src} alt={selectedImage.alt} />
            </div>
            <p>{selectedImage.caption}</p>
          </div>
        )}
      </dialog>
    </>
  );
}

export default Images;
export type { ImagesProps };
