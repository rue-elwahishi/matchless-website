import { createSelector } from 'reselect';

const selectSection = state => state.section;

export const selectCollections = createSelector(
    [selectSection],
    section => section.collections
);

