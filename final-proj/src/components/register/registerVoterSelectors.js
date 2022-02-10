import { createSelector } from 'reselect';

export const selectVoters= state => state.voters;
export const selectSortObj = state => state.sortObj;
export const selectEditVoterId = state => state.editVoterId;

export const selectSortedVoters = createSelector(
    selectVoters,
    selectSortObj,
    (voters,sortObj)=>{
        [...voters].sort((a,b) => {
            if (a[sortObj.column] > b[sortObj.column]) {
                return sortObj.order  ? -1 : 1;
              } else if (a[sortObj.column] < b[sortObj.column]) {
                return sortObj.order  ? 1 : -1;
              } else {
                return 0;
              }
        })
    }
);