import * as types from './actionTypes';

export function selectProvider(provider) {
  return {
    type: types.BROWSE_SELECT_PROVIDER,
    value: provider
  };
}
