import { defineStore } from 'pinia';
import { db } from '../db';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      username: '',
      description: 'asd',
    };
  },
  actions: {
    async getUserData() {
      let username = await db.user.get({ key: 'username' });
      if (username !== undefined) {
        this.updateUsername(username.value);
      } else {
        db.user.put({ key: 'username', value: 'Newbie' });
        this.getUserData();
      }
    },
    changeProfilePicture() {
      console.log('Changing profile pictures has not been implemented yet');
    },
    updateUsername(newUsername) {
      this.username = newUsername;
    },
    async saveUsername(newUsername) {
      this.updateUsername(newUsername);
      db.user.put({ key: 'username', value: newUsername });
    },
  },
});
