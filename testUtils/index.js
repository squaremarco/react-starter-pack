import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

export const snapshotify = wrapper => wrapper.html();

export const actionNameCreator = (prefix, string) => `${prefix}/${string}`;

export const mockStoreCreator = (middlewares = [thunk]) => configureMockStore(middlewares);
