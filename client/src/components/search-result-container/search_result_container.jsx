import React from "react";
import ResultCard from "../../components/result-card/result-Card.component";
import { connect } from "react-redux";
import "./search_result_container.scss";

class ResultContainer extends React.Component {
  render() {
    var blabla = "";
    blabla =
      this.props.results.length > 0 ? (
        this.props.results.map(result => {
          return <ResultCard key={result.id} result={result} />;
        })
      ) : (
        <h1>NO Result</h1>
      );

    return <div className="serch_result_container">{blabla}</div>;
  }
}

const mapStateToProps = state => ({
  results: state.search.results.data
});
export default connect(mapStateToProps)(ResultContainer);
