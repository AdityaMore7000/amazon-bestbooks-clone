import Author from "./Author";
import Image from "./Image";
import Title from "./Title";

const Book = () => {
    return ( 
        <div className=" w-fit mx-auto my-10 bg-yellow-400 p-7 rounded-3xl">
        <Image/>
        <Title/>
        <Author/>
        </div>
     );
}
 
export default Book;