import React, { useState } from 'react';

import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelectors';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    state => state.repositories,
  );

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
    setTerm('');
  };

  return (
    <div>
      <form onSubmit={searchHandler}>
        <input value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && (
        <ul>
          {data.map(d => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepositoriesList;
