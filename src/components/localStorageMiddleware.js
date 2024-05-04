const localStorageMiddleware=store=>next=>action=>{
  const result=next(action);
  localStorage.setItem('tasks', JSON.stringify(store.getState().tasks));
  return result;
};

export default localStorageMiddleware;
