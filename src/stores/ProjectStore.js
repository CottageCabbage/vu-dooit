import { defineStore } from 'pinia';

export const useProjectStore = defineStore('projects', {
  state: () => {
    return {
      projects: [
        {
          title: 'asd',
          id: 1,
          desc: 'asd',
          tasks: [],
        },
      ],
    };
  },
  actions: {
    createDefaultInbox() {
      const inboxProject = {
        title: 'Inbox',
        id: 'inbox',
        desc: 'Something something. Hello world!',
        tasks: [],
      };
      this.projects.push(inboxProject);
    },
    createTask(projectID, title, priority) {
      const newTask = {
        title: title,
        done: false,
        priority: priority,
      };
      this.projects[projectID].tasks.push(newTask);
    },
    toggleTaskDone(projectID, taskID) {
      this.projects[projectID].tasks[taskID].done =
        !this.projects[projectID].tasks[taskID].done;
    },
  },
});
