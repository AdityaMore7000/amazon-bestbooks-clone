import Book from "./Book";

const Booklist = () => {
    return ( 
        <>
        <section className="grid grid-cols-3 bg-gradient-to-tr from-pink-500 to-blue-500">
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </section>
        </>
     );
}
 
export default Booklist;