import { createSelector } from 'reselect';

const selectSection = state => state.section;

export const selectCollections = createSelector(
    [selectSection],
    section => section.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );
