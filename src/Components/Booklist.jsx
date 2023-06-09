import Book from "./Book";
import books from "../data/books.json";
const Booklist = () => {
  return (
    <>
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4">
        {books.map((book) => (
          <>
            <Book key={book.id} {...book} />
          </>
        ))}
      </section>
    </>
  );
};

export default Booklist;
