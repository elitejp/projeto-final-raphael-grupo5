import { apiOwner } from "..";

const getOwnerAndPets = async (userId, token) => {
  return await apiOwner
    .get(`/users/${userId}?_embed=pet`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export { getOwnerAndPets };
