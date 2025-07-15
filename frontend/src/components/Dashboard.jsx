import BMSOverview from './BMSOverview';
import { useState } from 'react';

export default function Dashboard({ data }) {
  const [showAllCells, setShowAllCells] = useState(false);

  return (
    <div style={{ padding: '30px', backgroundColor: '#f4f4f5', height: '100vh', overflowY: 'auto' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>Dashboard</h2>
          <div style={{ color: data.connected ? 'green' : 'red', fontWeight: 'bold', fontSize: '14px' }}>
            {data.connected ? 'CONNECTED ✔' : 'NOT CONNECTED ✖'}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          {/* Left Panel - BMS Overview */}
          <div style={{ flex: '1', height: '100%' }}>
            <div style={{
              backgroundColor: '#0f172a',
              color: 'white',
              padding: '20px',
              borderRadius: '12px',
              height: '100%',
              minHeight: '500px',  // For visual alignment
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>BMS OVERVIEW</h3>
              <p style={{ fontSize: '14px', opacity: 0.7, marginBottom: '20px' }}>13 CELLS DETECTED</p>
              <p><strong>BMS SERIAL N.:</strong> 1KXV-253-SD01-24</p>
              <p><strong>BMS PARTS N.:</strong> 137428-01</p>
            </div>
          </div>

          {/* Right Panel - Cells + NTC in separate white cards */}
          <div style={{ flex: '2', display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Block Cells */}
            <div style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ color: '#1e293b', fontWeight: '600', marginBottom: '10px' }}>Cells Voltage</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '20px',
                marginBottom: '10px'
              }}>
                {(showAllCells ? data.cells : data.cells.slice(0, 7)).map((value, index) => (
                  <div key={index} style={{
                    background: '#f9fafb',
                    padding: '15px',
                    borderRadius: '10px',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontWeight: 'bold', color: '#1e293b' }}>CELL {index + 1}</div>
                    <div style={{ marginTop: '10px', fontSize: '16px', color: '#2563eb' }}>{value.toFixed(2)} V</div>
                  </div>
                ))}
              </div>
              <button onClick={() => setShowAllCells(!showAllCells)} style={{
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '6px 12px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                {showAllCells ? 'Show Less' : 'Show More'}
              </button>
            </div>

            {/* Block NTC */}
            <div style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ color: '#1e293b', fontWeight: '600', marginBottom: '10px' }}>NTC Temperatures</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '20px'
              }}>
                {data.temps.map((value, index) => (
                  <div key={index} style={{
                    background: '#f9fafb',
                    padding: '15px',
                    borderRadius: '10px',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontWeight: 'bold', color: '#1e293b' }}>NTC {index + 1}</div>
                    <div style={{ marginTop: '10px', fontSize: '16px', color: '#16a34a' }}>{value.toFixed(1)} °C</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}