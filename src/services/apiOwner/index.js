import { apiOwner } from "..";

export function getOwnerAndPets(userId) {
  const ownerPets = apiOwner
    .get(`/users/${userId}?_embed=pet`)
    .then((res) => res.json())
    .catch((err) => err);

  return ownerPets;
}
