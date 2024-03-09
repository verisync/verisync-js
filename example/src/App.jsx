import Verisync from 'verisync-js';
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const sync = new Verisync({
    client_id: 'client id here',
    flow_id: 'flow id here',
    redirect_url: "redirect url",
  });



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => sync.verify("testuser@email.com")}>
          Test Verification
        </button>
      </div>
    </>
  )
}

export default App
