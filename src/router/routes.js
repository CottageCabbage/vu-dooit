const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "Home", component: () => import("pages/HomePage.vue") },
      {
        path: "project/:id",
        name: "Project",
        component: () => import("pages/ProjectPage.vue"),
      },
      {
        path: "profile",
        name: "Profile",
        component: () => import("pages/ProfilePage.vue"),
      },
      {
        path: "habits",
        name: "Habits",
        component: () => import("pages/HabitsPage.vue"),
      },
      {
        path: "rewards",
        name: "Rewards",
        component: () => import("pages/RewardsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
