import AddPetButton from "@/app/components/AddPetButton";
import ItemListContainer from "@/app/components/ItemListContainer";

const AvailablePets = () => {
    return (
      <div className="flex h-full rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-black">Gestión Mascotas Disponibles</h2>
        <AddPetButton/>
        <ItemListContainer/>
      </div>
    );
  };
  
  export default AvailablePets;
  