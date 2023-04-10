const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/HomePage.vue"),
      },
      {
        path: "/account",
        component: () => import("../components/MyAccount.vue"),
      },
      {
        path: "/orders",
        component: () => import("../components/MyOrders.vue"),
      },
      {
        path: "/wallet",
        component: () => import("../components/MyWallet.vue"),
      },
      {
        path: "/addresses",
        component: () => import("../components/MyAddresses.vue"),
      },
      {
        path: "/contact-us",
        component: () => import("../components/ContactUs.vue"),
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
