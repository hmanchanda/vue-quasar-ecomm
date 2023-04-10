<template>
  <div>
    <q-card style="width: 220px" class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom">
          <div class="text-subtitle2">
            {{ product.name }}
          </div>
        </div>
      </q-img>

      <q-card-actions>
        <q-icon
          color="primary"
          size="md"
          name="remove_circle"
          @click="
            quantity > 0 ? (quantity = quantity - 1) : '';
            decrement(quantity);
          "
        />
        <q-input style="width: 130px" outlined dense v-model="quantity" />
        <q-icon
          color="primary"
          size="md"
          name="add_circle"
          @click="
            quantity += 1;
            increment(quantity);
          "
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineProps } from "vue";
import { selectedProductStore } from "../stores/selected-product-store.js";

const store = selectedProductStore();
const props = defineProps({
  product: Object,
});
const quantity = ref(0);

for (let i in store.getSelectedProductList) {
  if (store.getSelectedProductList[i].id === props.product.id) {
    quantity.value = store.getSelectedProductList[i].quantity;
  }
}

function increment(quantity) {
  store.addInCart(props.product, quantity);
}
function decrement(quantity) {
  store.removeFromCart(props.product, quantity);
}
</script>
