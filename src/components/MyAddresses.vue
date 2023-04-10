<template>
  <q-btn class="q-ma-md" color="primary" label="Add Address" />
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      v-for="address in store.userAddressList"
      :key="address.id"
      class="my-card"
      flat
      bordered
    >
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          {{ address.street + ", " + address.city + ", " + address.state }}
        </div>
        <div class="text-caption text-grey">
          {{ address.country + ", " + address.pincode }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-toggle
          v-model="address.defaultAddress"
          @update:model-value="
            (value, evt) => {
              changeDefaultAddress(address, value);
            }
          "
          label="Make Default"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { addressList } from "../utils";
import { userAddressStore } from "../stores/user-address-store";

const store = userAddressStore();

store.userAddressList = addressList;

function changeDefaultAddress(address, val) {
  for (let i in store.userAddressList) {
    if (val) {
      if (store.userAddressList[i].id !== address.id) {
        store.userAddressList[i].defaultAddress = false;
      } else {
        store.userAddressList[i].defaultAddress = true;
      }
    }
  }
}
</script>
