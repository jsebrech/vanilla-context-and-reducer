import { ContextProvider } from "./lib/tiny-context.js";

customElements.define('tasks-context', class extends HTMLElement {
    tasksProvider = new ContextProvider(this, 'tasks', structuredClone(initialTasks));
    dispatchProvider = new ContextProvider(this, 'tasks-dispatch', (action) => {
        this.tasksProvider.value = tasksReducer(this.tasksProvider.value, action);
    })
    connectedCallback() {
        this.style.display = 'contents';
    }
});

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        case 'changed': {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];
