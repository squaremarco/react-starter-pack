import { combineEpics } from 'redux-observable';

import epics from './epics';

const createRootEpic = () => combineEpics(...epics);

export default createRootEpic;
