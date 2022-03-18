import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => {
    return {
      projects: [
        { title: 'Default' }
      ]
    }
  }
})
