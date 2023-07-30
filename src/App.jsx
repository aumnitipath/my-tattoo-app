import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="app-header">
          <img className="app-header-logo" src="/images/logo.png"></img>
        </header>
        <div className="app-grid">
          <div className="tattoo-item">
            <img src="/images/tattoo-01-small.jpg" />
            <h4>ต่ายน้อย 1</h4>
          </div>

          <div className="tattoo-item">
            <img src="/images/tattoo-02-small.jpg" />
            <h4>ต่ายน้อย 1</h4>
          </div>

          <div className="tattoo-item">
            <img src="/images/tattoo-03-small.jpg" />
            <h4>ต่ายน้อย 1</h4>
          </div>

          <div className="tattoo-item">
            <img src="/images/tattoo-04-small.jpg" />
            <h4>ต่ายน้อย 1</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
