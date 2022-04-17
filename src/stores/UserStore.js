import { defineStore } from 'pinia';
import { db } from '../db';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      username: '',
      bio: '',
    };
  },
  actions: {
    async getUserData() {
      this.getUsername();
      this.getBiography();
    },
    // * PROFILE DATA
    // USERNAME
    async getUsername() {
      let username = await db.user.get({ key: 'username' });
      if (username !== undefined) {
        this.updateUsername(username.value);
      } else {
        db.user.put({ key: 'username', value: 'Newbie' });
        this.getUserData();
      }
    },
    updateUsername(newUsername) {
      this.username = newUsername;
    },
    async saveUsername(newUsername) {
      this.updateUsername(newUsername);
      db.user.put({ key: 'username', value: newUsername });
    },
    // BIOGRAPHY
    async getBiography() {
      let biography = await db.user.get({ key: 'bio' });
      if (biography !== undefined) {
        this.updateBiography(biography.value);
      } else {
        db.user.put({ key: 'bio', value: 'I am myself.' });
        this.getUserData();
      }
    },
    updateBiography(newBio) {
      this.bio = newBio;
    },
    async saveBiography(newBio) {
      this.updateBiography(newBio);
      db.user.put({ key: 'bio', value: newBio });
    },
  },
});
