import React, { useState } from 'react';

import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelectors';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    state => state.repositories,
  );
  console.log(data);

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
    </div>
  );
};

export default RepositoriesList;
