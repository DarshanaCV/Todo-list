export const ADD_TASK='ADD_TASK';
export const DELETE_TASK='DELETE_TASK';
export const TOGGLE_TASK='TOGGLE_TASK';

export const addTask=(text)=>{
  return {
    type: ADD_TASK,
    payload: {
      id: new Date().getTime(),
      text,
      completed: false
    }
  };
};

export const deleteTask=(id)=>{
  return {
    type: DELETE_TASK,
    payload: id
  };
};

export const toggleTask=(id)=>{
  return {
    type: TOGGLE_TASK,
    payload: id
  };
};
