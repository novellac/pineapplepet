<template>
  <main>
    <h1>Fetch the data</h1>
    <p>
      Click a button here to get the data. Then head to the <a href="/about">About page</a> to
      verify that the store items still persist and you can call them from other components.
    </p>
    <p>Please keep in mind that this is just an example and does no error handling, etc.</p>
    <button @click="store.fetchUsers">Fetch users</button>
    <button @click="store.clearUsers">Clear users (you will have to fetch again)</button>
    <!-- You can also call nested store objects directly in the templat -->
    <p>Latest fetch time is: {{ store.getLatestFetch }}</p>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
    <hr />
    <p>
      Resources: To avoid reinventing the wheel, I adapted the fetch calls from
      <a href="https://blog.logrocket.com/consume-apis-vuex-pinia-axios/#consuming-apis-pinia-axios"
        >U. Ugochi's nice comparison of Vuex and Pinia</a
      >
      and the <a href="https://pinia.vuejs.org/introduction.html">Pinia docs</a>.
    </p>
  </main>
</template>

<script setup>
import { useCoolThingsStore } from '../stores/coolthings'
import { computed } from 'vue'

const store = useCoolThingsStore()

// We can call our state from inside a computed if we like (we could have also called it in a method)
const users = computed(() => {
  return store.users
})
</script>
