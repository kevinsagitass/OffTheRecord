const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "fashion",
        component: () => import("pages/FashionPage.vue"),
      },
      {
        path: "health-beauty",
        component: () => import("pages/HealthBeautyPage.vue"),
      },
      {
        path: "games",
        component: () => import("pages/GamePage.vue"),
      },
      {
        path: "anime",
        component: () => import("pages/AnimePage.vue"),
      },
      {
        path: "books",
        component: () => import("pages/BookPage.vue"),
      },
      {
        path: "hacks",
        component: () => import("pages/HackPage.vue"),
      },
      {
        path: "others",
        component: () => import("pages/OtherPage.vue"),
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
