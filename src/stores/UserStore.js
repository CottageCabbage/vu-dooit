import { defineStore } from 'pinia';

export const useUserStore = defineStore('test', {
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
  },
});
