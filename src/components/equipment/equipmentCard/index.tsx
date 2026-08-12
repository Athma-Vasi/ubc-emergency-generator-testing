import type { EquipmentInfo } from "../info";

function EquipmentCard({
  category,
  description,
  id,
  manufacturer,
  model,
  pdfUrls,
  tags,
  title,
}: EquipmentInfo) {
  return (
    <div className="equipment-card" id={id}>
      <h3>{title}</h3>
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
        {pdfUrls.map((url) => (
          <li key={url}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url.split("/").pop()}
            </a>
          </li>
        ))}
      </ul>
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

export default EquipmentCard;
