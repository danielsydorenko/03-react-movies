import type { FC, FormEvent } from 'react';
import { toast } from 'react-hot-toast';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const queryElement = form.elements.namedItem('query') as HTMLInputElement;
    const query = queryElement.value.trim();

    if (!query) {
      toast.error('Please enter a search term...');
      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit TMDB
        </a>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="query"
            className={styles.input}
            placeholder="Search movies..."
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
