<template>
  <div>
  <h1>Using JSON from the store</h1>
    <p>We didn't fetch the JSON here, but we are using it here.</p>
    <p>Here you will see the same json coming from the store. We could add an action to the store if we wanted to manipulate the JSON in our store from any of our components like this one.</p>
    <button @click="filterNames('C')">Show names that begin with C</button>
    <button @click="filterNames('')">Show all names</button>
    <p v-if="!filteredNames.length">There are no names to see yet! Go back home and fetch.</p>
    <ul>
      <li v-for="user in filteredNames" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCoolThingsStore } from '../stores/coolthings'

import { ref } from 'vue'

const store = useCoolThingsStore()

const filteredNames = ref(store.users)

const filterNames = (filter) => {
  filteredNames.value = store.users.filter((user) => user.name.startsWith(filter))
}
</script>
