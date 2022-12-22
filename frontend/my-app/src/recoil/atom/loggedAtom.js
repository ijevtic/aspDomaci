import { atom } from "recoil";

export const loggedIn = atom({
  key: "loggedInState",
  default: 'false',
});
