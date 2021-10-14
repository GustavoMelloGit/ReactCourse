import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.replace("/quotes");
    }
  }, [status, history]);

  const onAddQuote = (data) => {
    sendRequest(data);
  };

  return (
    <section>
      <h1>New Quote</h1>
      <QuoteForm isLoading={status === "pending"} onAddQuote={onAddQuote} />
    </section>
  );
};
export default NewQuote;
