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
      let data = await db.projects.toArray();
      if (data.length > 0) {
        this.projectList = data;
      } else if (data.length <= 0) {
        db.projects.put({
          id: 'inbox',
          title: 'Inbox',
          desc: 'Hello world',
          archived: false,
          tasks: [
            { title: 'I am a task.', id: '2', priority: '2', done: false },
          ],
        });
        this.getData();
      }
    },
    async createProject(newProjectData) {
      db.projects.put(newProjectData);
      // let projectArray = await db.projects.toArray();
      // projectArray.push(newProjectData)
      this.projectList.push(newProjectData);
    },
    // TASKS: Create, Delete, ToggleDone
    async createTask(projectINDEX, projectID, title, priority) {
      const newTask = {
        title: title,
        done: false,
        priority: priority,
        id: 222,
      };
      let tasksArray = await db.projects.get({ id: projectID });
      tasksArray = tasksArray.tasks;
      tasksArray.push(newTask);

      db.projects.update({ id: projectID }, { tasks: tasksArray });
      this.projectList[projectINDEX].tasks.push(newTask);
    },
    async deleteTask(projectINDEX, projectID, taskINDEX) {
      let tasksArray = await db.projects.get({ id: projectID });
      tasksArray = tasksArray.tasks;
      tasksArray.splice(taskINDEX, 1);

      db.projects.update({ id: projectID }, { tasks: tasksArray });
      this.projectList[projectINDEX].tasks.splice(taskINDEX, 1);
    },
    async toggleTaskDone(projectINDEX, projectID, taskINDEX) {
      let tasksArray = await db.projects.get({ id: projectID });
      tasksArray = tasksArray.tasks;
      tasksArray[taskINDEX].done = !tasksArray[taskINDEX].done;

      db.projects.update({ id: projectID }, { tasks: tasksArray });
    },
  },
});
