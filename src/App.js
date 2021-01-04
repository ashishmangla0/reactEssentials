import './App.css';


function Header () {
return (
  <header>
    this is header
  </header>
)}

function Main () {
  return(
    <section>
      <p>
        this is main section
      </p>
    </section>
  )
}

function Footer () {
  return(
    <footer>
      this is footer
    </footer>
  )
}

function App() {
  return (
    <div className="App">
    <Header/>
    <Main/>
    <Footer />
    </div>
  );
}

export default App;
