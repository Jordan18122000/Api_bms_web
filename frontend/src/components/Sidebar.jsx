import { useState } from 'react';

export default function Sidebar() {
  const [active, setActive] = useState('Dashboard');

  const menuItems = [
    'Dashboard',
    'Cell Manager',
    'Alarms',
    'Help',
    'Settings',
  ];

  return (
    <div style={{
      width: '250px',
      background: '#111827',
      color: 'white',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100vh'
    }}>
      <div>
        <img src="/images/logo_bmspowersafe.png" alt="BMS Logo" style={{ width: '100%', maxWidth: '150px', marginBottom: '20px' }} />
        <h1 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>BMS 13-14S (13S)</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {menuItems.map(item => (
            <li
              key={item}
              onClick={() => setActive(item)}
              style={{
                padding: '10px 0',
                cursor: 'pointer',
                color: active === item ? '#60a5fa' : 'white',
                fontWeight: active === item ? 'bold' : 'normal'
              }}
              onMouseEnter={e => e.target.style.color = '#60a5fa'}
              onMouseLeave={e => e.target.style.color = active === item ? '#60a5fa' : 'white'}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ fontSize: '12px', color: '#888' }}>© STARTEC ENERGY</div>
    </div>
  );
}