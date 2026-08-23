import { useState } from "react";
import EquipmentCard from "../equipmentCard";
import { equipment_infos } from "../info";

function EquipmentLibrary() {
  const [searchTerm, setSearchTerm] = useState("");

  const searchInput = (
    <input
      type="text"
      className="equipment-search-input"
      placeholder="Search equipment..."
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.currentTarget.value)}
    />
  );

  return (
    <div className="equipment-library">
      {searchInput}

      {searchTerm.length > 0 ? (
        <div className="equipment-grid">
          {equipment_infos
            .filter((equipment_info) =>
              equipment_info.tags.some((tag) =>
                tag.toLowerCase().includes(searchTerm.toLowerCase()),
              ),
            )
            .map((equipment_info) => (
              <EquipmentCard key={equipment_info.id} {...equipment_info} />
            ))}
        </div>
      ) : (
        <div className="equipment-grid">
          {equipment_infos.map((equipment_info) => (
            <EquipmentCard key={equipment_info.id} {...equipment_info} />
          ))}
        </div>
      )}
    </div>
  );
}

export default EquipmentLibrary;
