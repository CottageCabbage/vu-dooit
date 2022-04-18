import Dexie from 'dexie';

export const db = new Dexie('myDatabase');

db.version(1).stores({
  user: 'key, value',
  projects: '++id, title, desc, tasks',
});
