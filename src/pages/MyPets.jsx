import { PetsListByGuardian } from "../components/PetsListByGuardian";
import { useUser } from "../contexts/UserContext";

export const MyPets = () => {
  const { user } = useUser();
  
  return (
    <div>
      <PetsListByGuardian guardianId={user?.id} />
    </div>
  );
};
