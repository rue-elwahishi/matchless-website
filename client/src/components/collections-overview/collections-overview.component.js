import React from 'react';
import './collections-overview.styles.scss'

import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import {selectCollections} from "../../selectors/section.selectors";

const CollectionsOverview = ({collections}) => {
    console.log(collections)
    return (
        <div className="collections-overview">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}  />
                ))
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
