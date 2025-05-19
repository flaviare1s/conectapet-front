import { Loader } from "../components/Loader";
import { PetsListByGuardian } from "../components/PetsListByGuardian";
import { useUser } from "../contexts/UserContext";

export const MyPets = () => {
  const { user } = useUser();

  if (!user) {
    return <Loader />;
  }

  return (
    <div>
      <PetsListByGuardian guardianId={user.id} />
    </div>
  );
};
