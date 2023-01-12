import QuoteList from "../components/quotes/QuoteList";
import { DUMMY_QUOTES } from "./dummy-quotes-arr";

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>;
}

export default AllQuotes