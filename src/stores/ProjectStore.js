import { defineStore } from 'pinia';
import { db } from '../db';

export const useProjectStore = defineStore('projects', {
  state: () => {
    return {
      projectList: [],
    };
  },
  actions: {
    async getData() {
      //
      let data = await db.projects.get({ archived: false });
      if (data !== undefined) {
        this.projectList = data;
      } else {
        db.projects.put({
          id: 'inbox',
          title: 'Inbox',
          desc: 'Hello world!',
          archived: false,
          tasks: [
            {
              title: 'Testing',
              done: false,
              priority: '1',
            },
            {
              title: 'Another task',
              done: false,
              priority: '2',
            },
          ],
        });
        this.getData();
      }
    },
    // LINELINELINELINELINELINE
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
