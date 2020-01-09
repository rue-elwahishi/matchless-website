import React, {Component} from 'react';

import SECTION_DATA from "./section-data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class SectionPage extends Component {

    state = {
        collections: SECTION_DATA
    };

    render() {
        const {collections} = this.state;
        return (
            <div className="section-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}  />
                    ))
                }
            </div>
        );
    }
}

export default SectionPage;
