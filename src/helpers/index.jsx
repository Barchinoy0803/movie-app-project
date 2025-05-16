export const getRatingColor = (rating) => {
  if (rating >= 7) return "bg-green-500";
  if (rating >= 5) return "bg-yellow-400";
  if (rating >= 3) return "bg-orange-400";
  return "bg-red-500";
};