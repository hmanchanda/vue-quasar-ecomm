<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      v-for="order in store.userOrderList"
      :key="order.id"
      class="my-card"
      flat
      bordered
    >
      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">Order ID : {{ order.id }}</div>
          <div
            class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
          ></div>
        </div>

        <q-rating v-model="order.userRating" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Amount : {{ order.amount }} | {{ order.date }}
        </div>
        <div class="text-caption text-grey">
          Items : {{ order.items.join(", ") }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        You cannot raise a complaint after 48 hrs of receiving the order
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { orderList } from "../utils";
import { userOrderStore } from "../stores/user-orders-store";

const store = userOrderStore();

store.userOrderList = orderList;
</script>
