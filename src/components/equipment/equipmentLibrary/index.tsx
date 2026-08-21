import EquipmentCard from "../equipmentCard";
import { equipment_infos } from "../info";

// TODO: Conse the other equipment components inside here
// use state to toggle css hidden/visible of pdfs
// avoids global state that is required when viewing pdfs in separate page
function EquipmentLibrary() {
  return (
    <div className="equipment-library">
      {equipment_infos.map((equipment_info) => (
        <EquipmentCard key={equipment_info.id} {...equipment_info} />
      ))}
    </div>
  );
}

export default EquipmentLibrary;
