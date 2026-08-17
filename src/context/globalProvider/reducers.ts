import type { GlobalActions } from "./actions";
import type { GlobalState } from "./state";

function globalReducer(state: GlobalState, dispatch: GlobalDispatch): GlobalState {
  const reducer = globalReducersMap.get(dispatch.action);
  return reducer == null ? state : reducer(state, dispatch);
}

const globalReducersMap: Map<
  GlobalActions[keyof GlobalActions],
  (state: GlobalState, dispatch: GlobalDispatch) => GlobalState
> = new Map([]);
