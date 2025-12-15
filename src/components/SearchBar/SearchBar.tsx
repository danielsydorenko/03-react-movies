import type { FC, FormEvent } from 'react';
import styles from './SearchBar.module.css';
import { toast } from 'react-hot-toast';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const queryElement = form.elements.namedItem('query') as HTMLInputElement;
    const query = queryElement.value;

    if (query.trim() === '') {
      toast.error('Please enter a search term...');
      return;
    }

    onSearch(query.trim());

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

        {/* ЗМІНА ТУТ: action={...} змінюємо на onSubmit={...} */}
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
