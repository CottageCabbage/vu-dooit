import { defineSidebarConfig } from "vuepress-theme-hope";

export const en = defineSidebarConfig({
  "/": [
    "",
    {
      text: "Getting Started",
      link: "intro/",
      icon: "creative"
    },
    {
      text: "Relevant Links",
      activeMatch: "^/Relevant.md",
      link: "Relevant.md",
      collapsable: true
    }
  ]
});
