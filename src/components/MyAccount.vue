<template>
  <div style="padding: 10px">
    <q-item>
      <q-item-section side>
        <q-avatar size="78px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>Himanshu Manchanda</q-item-label>
        <q-item-label caption>Member since - 2018</q-item-label>
      </q-item-section>
      <q-item-section side> Last Login - {{ "loginTime" }} </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>
