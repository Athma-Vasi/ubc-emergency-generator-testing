import { useRef, useState } from "react";

import type { EquipmentInfo } from "../info";

function EquipmentCard({
  category,
  description,
  id,
  manufacturer,
  model,
  pdfUrls,
  tags,
}: EquipmentInfo) {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openFile(file: string) {
    setSelectedFile(file);
    dialogRef.current?.showModal();
  }

  function closeFile() {
    dialogRef.current?.close();
    setSelectedFile(null);
  }

  return (
    <div className="equipment-card" id={id}>
      <p>
        <strong>Manufacturer:</strong> {manufacturer}
      </p>
      <p>
        <strong>Model:</strong> {model}
      </p>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>{description}</p>

      <ul>
        {pdfUrls.map(({ title, url }) => (
          <li key={url}>
            <button type="button" onClick={() => openFile(url)}>
              {title}
            </button>
          </li>
        ))}
      </ul>

      <EquipmentFileViewer dialogRef={dialogRef} file={selectedFile} onClose={closeFile} />

      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

type EquipmentFileViewerProps = {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  file: string | null;
  onClose: () => void;
};

function EquipmentFileViewer({ dialogRef, file, onClose }: EquipmentFileViewerProps) {
  return (
    <dialog ref={dialogRef} aria-label="Equipment document viewer">
      <button type="button" onClick={onClose}>
        Close
      </button>

      {file ? (
        <object data={file} type="application/pdf" width="100%" height="600px">
          <p>
            It appears you don't have a PDF plugin for this browser. You can{" "}
            <a href={file} target="_blank" rel="noopener noreferrer">
              click here to download the PDF file.
            </a>
          </p>
        </object>
      ) : null}
    </dialog>
  );
}

export default EquipmentCard;
