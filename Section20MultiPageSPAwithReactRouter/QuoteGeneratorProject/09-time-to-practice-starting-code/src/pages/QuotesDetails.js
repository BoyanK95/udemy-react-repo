import { Fragment } from "react";
import { Link, Route, useParams,useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { DUMMY_QUOTES } from "./dummy-quotes-arr";
import HighlightedQuote from "../components/quotes/HighlightedQuote";


const QuotesDetails = () => {
  const match = useRouteMatch()
  const param = useParams();
  const quote = DUMMY_QUOTES.find(quote => quote.id.toString() === param.quoteId)

  console.log(match);

  if (!quote) {
    return <p>No quote found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
      <div className="centered">
      <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
      </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuotesDetails;
