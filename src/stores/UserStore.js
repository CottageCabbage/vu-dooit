import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      username: String('I Dislike Onions'),
      description: String('I hate those things.'),
    };
  },
  actions: {
    changeProfilePicture() {
      console.log('Changing profile pictures has not been implemented yet');
    },
    changeUsername(newUsername) {
      this.username = newUsername;
    },
  },
});
