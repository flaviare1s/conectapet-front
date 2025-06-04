import { Loader } from "../components/Loader";
import { PetsListByGuardian } from "../components/PetsListByGuardian";
import { useAuth } from "../contexts/AuthContext";

export const MyPets = () => {
  const { user } = useAuth();

  if (!user) {
    return <Loader />;
  }

  return (
    <div>
      <PetsListByGuardian guardianId={user.id} />
    </div>
  );
};
