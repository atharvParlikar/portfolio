import './App.css'
import Markdown from 'markdown-to-jsx'
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <Blog encoded_blog={
        "PGltZyBzcmM9Imh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS91c2VyL2Nfdl9yIiB3aWR0aD0iNDAwIj4KPiBhYm92ZSBpcyBhbiBpbWFnZQ=="
      } />
    </div>
  );
}

export default App;
