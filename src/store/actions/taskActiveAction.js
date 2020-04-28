export const taskSave = task => {
    return {
        type: 'SAVE_TASK_ACTIVE',
        payload: task
    }
}