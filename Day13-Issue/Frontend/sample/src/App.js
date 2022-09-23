import logo from './logo.svg';
import './App.css';
import FormData from './FormData';
import FileUpload from './FileUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormData/>
        <FileUpload/>
      </header>
    </div>
  );
}

export default App;
