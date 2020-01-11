import React from "react";
import { connect } from "react-redux";

import Search from "../../components/search/search.component";
import Spinner from "../../components/Spinner/Spinner";
import ResultContianer from "../../components/search-result-container/search_result_container";

class SearchResult extends React.Component {
  render() {
    return (
      <div className="serch_result">
        {this.props.loading ? <Spinner /> : <ResultContianer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.search.loading
});

export default connect(mapStateToProps)(SearchResult);
