import PropTypes from 'prop-types';

export const favouriteBooks = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Router overview" }
  ];
  
  export const BookList = ({ books, children }) => {
    return (
      <ul>
        {books.map((book) => {
          return <li key={book.id}>{book.name}{children}</li>;
        })}
      </ul>
    );
  };

  // Валідація типів пропсів
BookList.propTypes = {
    books: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    ).isRequired,
    children: PropTypes.node
  };