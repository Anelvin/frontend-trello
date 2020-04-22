export const saveTaskList = taskList => {
    return {
        type: 'SAVE_TASKLIST',
        payload: taskList
    }
}