import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Gustavo", text: "Learning react is fun" },
  { id: "q2", author: "Max", text: "Learning react is great" },
];

const AllQuotes = () => {
  return (
    <section>
      <h1>All Quotes</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </section>
  );
};
export default AllQuotes;
