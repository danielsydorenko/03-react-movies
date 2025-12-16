import type { FC } from 'react'; // <-- ВИПРАВЛЕНО: додано слово 'type'
import { toast } from 'react-hot-toast';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (formData: FormData) => {
    const query = formData.get('query');

    if (typeof query !== 'string' || !query.trim()) {
      toast.error('Please enter a search term...');
      return;
    }

    onSubmit(query.trim());
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

        {/* @ts-expect-error */}
        <form action={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="query"
            className={styles.input}
            placeholder="Search movies..."
            autoComplete="off"
            autoFocus
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
