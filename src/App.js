import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <form>
      <div class="container">
             <h1>Formulaires</h1>
             <form>
                 <input type="text" class="form-control form-control-sm mb-3" id="email" placeholder="fullname" required/>
                 <input type="email" class="form-control form-control mb-3" id="email" placeholder="email" required/>
                 <input type="password" class="form-control form-control-lg" id="email" placeholder="password" required/>
             </form>
         </div>
         <button type="button" class="btn btn-primary">Ok</button>
</form>
      </header>
    </div>
  );
}

export default App;
