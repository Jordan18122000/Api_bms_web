export default function BMSOverview() {
  return (
    <div style={{
      background: '#0f172a',
      color: 'white',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '20px'
    }}>
      <h3 style={{ marginBottom: '10px' }}>BMS OVERVIEW</h3>
      <p style={{ margin: '10px 0' }}>
        <strong>BMS SERIAL N.</strong>: <span style={{ color: '#ccc' }}>1KXV-253-SD01-24</span>
      </p>
      <p style={{ margin: '10px 0' }}>
        <strong>BMS PARTS N.</strong>: <span style={{ color: '#ccc' }}>137428-01</span>
      </p>
    </div>
  );
}