import { useLoaderData } from "react-router-dom";


const BookService = () => {
    const bookService = useLoaderData();
    console.log(bookService);
    return (
        <div>
            <h2>book now</h2>
        </div>
    );
};

export default BookService; 