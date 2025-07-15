import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

export default function App() {
  const [data, setData] = useState({
    connected: false,
    cells: Array(13).fill(0),
    temps: Array(4).fill(0)
  });

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://localhost:8000/status')
        .then(res => res.json())
        .then(json => setData(json))
        .catch(() => {
          setData({
            connected: false,
            cells: Array(13).fill(0),
            temps: Array(4).fill(0)
          });
        });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden'
    }}>
      <Sidebar />
      <div style={{ flex: 1, backgroundColor: '#f4f4f5', overflowY: 'auto' }}>
        <Dashboard data={data} />
      </div>
    </div>
  );
}