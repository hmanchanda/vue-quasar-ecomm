<template>
  <div class="q-pa-md q-gutter-sm">
    <q-tabs
      v-model="tab"
      dense
      align="center"
      class="text-primary"
      :breakpoint="0"
    >
      <q-tab no-caps name="fruits" label="Fruits" />
      <q-tab no-caps name="vegetables" label="Vegetables" />
      <q-tab no-caps name="bakery" label="Bakery" />
      <q-tab no-caps name="namkeens" label="Namkeens" />
      <q-tab no-caps name="dairy" label="Dairy" />
      <q-tab
        no-caps
        name="biscuits_chocolates"
        label="Buiscuits and Chocolates"
      />
    </q-tabs>
  </div>
  <div class="q-pa-md row items-start q-gutter-md">
    <div v-for="product in productListCategoryWise" :key="product.id">
      <Product v-if="product.category === tab" :product="product"></Product>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Product from "src/components/Product.vue";
import { productList } from "../utils";

const tab = ref("fruits");
const productsList = ref(productList);

const productListCategoryWise = computed(() =>
  productsList.value.filter((p) => p.category === tab.value)
);
</script>
