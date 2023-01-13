import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { DUMMY_QUOTES } from "./dummy-quotes-arr";
import HighlightedQuote from "../components/quotes/HighlightedQuote";


const QuotesDetails = () => {
  const param = useParams();
  const quote = DUMMY_QUOTES.find(quote => quote.id.toString() === param.quoteId)

  if (!quote) {
    return <p>No quote found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuotesDetails;
