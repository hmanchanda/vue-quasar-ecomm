<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> GoKart </q-toolbar-title>

        <div>
          <q-icon name="shopping_cart" size="md"></q-icon>
          {{ store.getTotalItemsInCart }}
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { selectedProductStore } from "../stores/selected-product-store";

const linksList = [
  {
    title: "Home",
    icon: "home",
    link: "/",
  },
  {
    title: "My Account",
    icon: "school",
    link: "/account",
  },
  {
    title: "My Orders",
    icon: "code",
    link: "/orders",
  },
  {
    title: "Wallet",
    icon: "chat",
    link: "/wallet",
  },
  {
    title: "My Addresses",
    icon: "record_voice_over",
    link: "/addresses",
  },
  /* {
    title: "Contact Us",
    icon: "rss_feed",
    link: "/contact-us",
  }, */
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const store = selectedProductStore();
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      store,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
