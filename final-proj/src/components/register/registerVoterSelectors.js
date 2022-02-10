import { createSelector } from 'reselect';

export const selectVoters= state => state.voters;
export const selectSortObj = state => state.sortObj;
export const selectEditVoterId = state => state.editVoterId;

export const selectSortedVoters = createSelector(
    selectVoters,
    selectSortObj,
    (voters,sortObj)=>
        [...voters].sort((a,b) => {
          console.log(sortObj.column);
          console.log(sortObj.order);
            if (a[sortObj.column] > b[sortObj.column]) {
              console.log('1');
                return sortObj.order  ? -1 : 1;
              } else if (a[sortObj.column] < b[sortObj.column]) {
                console.log('2');
                return sortObj.order  ? 1 : -1;
              } else {
                console.log('3');
                return 0;
              }
        }));