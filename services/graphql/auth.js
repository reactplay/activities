import { submit } from "@/services/request";

export const getAllUsers = () => {
  return submit({
    display: "All Users",
    name: "Fetch_Users",
    function: "users",
    return: ["avatarUrl", "displayName", "id"],
  });
};
