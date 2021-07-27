import ReactDOM from 'react-dom';

import Application from './components/App';

const Main = () => {
  return (
    <div>
      <Application />
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
