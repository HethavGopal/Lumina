import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div className="App" style={{ margin: 0, padding: 0 }}>
      <Navigation />
      <main style={{ padding: '0', margin: '0' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
