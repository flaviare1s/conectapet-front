import { PetsListByGuardian } from "../components/PetsListByGuardian";
import { useUser } from "../contexts/userContext";

export const MyPets = () => {
  const { user } = useUser();

  if (!user || user.role !== "guardian") {
    return <p className="text-center mt-10 text-red-500">Acesso não autorizado.</p>;
  }
  
  return (
    <div>
      <PetsListByGuardian guardianId={user?.id} />
    </div>
  );
};
