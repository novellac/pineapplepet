import { defineStore } from 'pinia'
import axios from 'axios'

export const useCoolThingsStore = defineStore('coolthings', {
  state: () => ({
    users: [],
    latestFetch: ''
  }),
  getters: {
    getUsers (state) {
      return state.users
    },
    getLatestFetch (state) {
      if (state.latestFetch) {
        return new Date(state.latestFetch)
      }
      return 'nothing fetched yet'
    }
  },
  actions: {
    async fetchUsers () {
      try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.users = data.data
        this.latestFetch = Date.now()
      }
      catch (error) {
        console.log("handle the error!", error)
      }
    },
    clearUsers () {
      this.users = []
    }
  }

})
