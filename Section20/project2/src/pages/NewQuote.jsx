import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();
  const onAddQuote = (data) => {
    console.log(data);
    history.replace("/quotes");
  };
  return (
    <section>
      <h1>New Quote</h1>
      <QuoteForm onAddQuote={onAddQuote} />
    </section>
  );
};
export default NewQuote;
