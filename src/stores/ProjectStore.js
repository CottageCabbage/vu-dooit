import { useObservable } from "@vueuse/rxjs";
import { liveQuery } from "dexie";
import { defineStore } from "pinia";
import { db } from "../db";

// import { liveQuery } from "dexie";
// import { useObservable } from "@vueuse/rxjs";
// friends: useObservable(
//   liveQuery(() => db.friends.toArray())
// ),

export const useProjectStore = defineStore("projects", {
  state: () => {
    return {
      project_data: useObservable(liveQuery(() => db.projects.toArray())),
    };
  },
  actions: {
    async getData() {
      let data = await db.projects.toArray();
      if (data.length > 0) {
        this.project_data = data;
      } else if (data.length <= 0) {
        db.projects.put({
          id: "inbox",
          title: "Inbox",
          desc: "Hello world",
          archived: false,
          tasks: [
            { title: "I am a task.", id: "2", priority: "2", done: false },
          ],
        });
        this.getData();
      }
    },
    // PROJECTS: Create, Delete
    async createProject(newProjectData) {
      db.projects.put(newProjectData);
    },
    async deleteProject(projectINDEX, projectID) {
      db.projects.delete(projectID);
      this.projectList.splice(projectINDEX, 1);
    },
    // TASKS: Create, Delete, ToggleDone
    async createTask(projectID, task_title, task_desc) {
      if (task_desc === undefined) {
        task_desc = "";
      }
      const newtask = {
        title: task_title,
        desc: task_desc,
        done: false,
        priority: "1",
        id: 123,
      };

      let tasksArray = await db.projects.get({ id: projectID });
      tasksArray = tasksArray.tasks;
      tasksArray.push(newtask);

      db.projects.update({ id: projectID }, { tasks: tasksArray });
    },
    async deleteTask(projectID, taskINDEX) {
      let tasksArray = await db.projects.get({ id: projectID });
      tasksArray = tasksArray.tasks;
      tasksArray.splice(taskINDEX, 1);

      db.projects.update({ id: projectID }, { tasks: tasksArray });
    },
    async toggleTaskDone(projectID, taskINDEX) {
      let tasksArray = await db.projects.get({ id: projectID });
      tasksArray = tasksArray.tasks;
      tasksArray[taskINDEX].done = !tasksArray[taskINDEX].done;

      db.projects.update({ id: projectID }, { tasks: tasksArray });
    },
  },
});
