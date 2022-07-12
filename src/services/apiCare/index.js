import { apiCare } from "..";

const getCareGiver = async (token) => {
  return await apiCare
    .get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export { getCareGiver };
