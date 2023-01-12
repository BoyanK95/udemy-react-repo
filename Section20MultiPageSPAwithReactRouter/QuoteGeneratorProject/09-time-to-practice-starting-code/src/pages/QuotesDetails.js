import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuotesDetails = () => {
  const param = useParams();
  console.log(param);

  return (
    <Fragment>
      <h1>Quotes Detail Page</h1>
      <p>{param.quoteId}</p>
      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuotesDetails;
