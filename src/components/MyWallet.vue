<template>
  <div class="q-pa-md q-gutter-y-md" style="max-width: 600px">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab no-caps name="cash" label="Go-Cash" />
        <q-tab no-caps name="coins" label="Go-Coins" />
        <q-tab no-caps name="referal" label="Referal Bonus" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="cash">
          <div class="text-h6">₹ 200</div>
          1 Go_cash = ₹1. Use it to make payments on your orders
        </q-tab-panel>

        <q-tab-panel name="coins">
          <div class="text-h6">750</div>
          You can use your coins to buy brand subscriptions
        </q-tab-panel>

        <q-tab-panel name="referal">
          <div class="text-h6">150</div>
          Use referal bonus to make payments for your orders. Maximum 20% can be
          utilized per order.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      tab: ref("cash"),
    };
  },
};
</script>
