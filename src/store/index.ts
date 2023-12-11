import { createStore, useStoreState, useStoreActions } from 'easy-peasy';
import { action,persist } from 'easy-peasy';
import ModelsStore from '../models/ModelsStore';

// const store = createStore(persist(ModelsStore, { allow: ['prospectsFlow'] }));
const store = createStore(persist({
  ...ModelsStore,
  reset: action(() => ({
    ...initialState,
  })),
}));

export default store;

let initialState = {};

initialState = store.getState();

export { store };

export const appState = useStoreState;

export const appActions = useStoreActions;
