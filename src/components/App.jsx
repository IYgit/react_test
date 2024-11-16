import Product from './Product';
import { BookList } from './BookList';
import { favouriteBooks } from './BookList';
import { Alert } from './Alert';
import { UserMenu } from '../UserMenu';

export default function App() {
  return (
    <div>
      <h1>Products</h1>
      <Product />
      <Product />
      <Product />

      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} > Hello </BookList>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>
      <UserMenu fontSize={48} name="icon 1" color="lime"/>
    </div>
  );
}
