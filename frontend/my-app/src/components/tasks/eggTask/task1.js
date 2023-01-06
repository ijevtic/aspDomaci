import { subtask1 } from "./subtask1";
import { subtask2 } from "./subtask2";
import { subtask3 } from "./subtask3";
import { subtask4 } from "./subtask4";

const subtasks = [subtask1,subtask2,subtask3,subtask4];

const task1 = {
    "title": 'Jaja',
    "subtasks": subtasks,
    "checker": true,
    "key": "task1",
    "submitOptions": subtasks.map(subtask => {return {'key' : subtask.key, 'title' : subtask.title}}),
}
export {
    task1
}