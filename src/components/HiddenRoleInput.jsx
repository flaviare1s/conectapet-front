export const HiddenRoleInput = ({ value, register }) => {
  return <input type="hidden" {...register("role")} value={value} />;
};
