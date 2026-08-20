type EquipmentFileViewerProps = {
  file: string;
};

function EquipmentFileViewer({ file }: EquipmentFileViewerProps) {
  // const params = useParams();
  return (
    <div className="equipment-file-viewer">
      <object data={file} type="application/pdf" width="100%" height="600px">
        <p>
          It appears you don't have a PDF plugin for this browser. You can{" "}
          <a href={file} target="_blank" rel="noopener noreferrer">
            click here to download the PDF file.
          </a>
        </p>
      </object>
    </div>
  );
}

export default EquipmentFileViewer;
export type { EquipmentFileViewerProps };
