import { atom } from "recoil";

const sidebarOpen = atom({
  key: "sidebarOpen",
  default: false,
});

export { sidebarOpen };
