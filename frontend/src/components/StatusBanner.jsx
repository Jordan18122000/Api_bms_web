export default function StatusBanner({ connected }) {
  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end' }}>
      <span style={{ fontWeight: 'bold', color: connected ? 'green' : 'red' }}>
        {connected ? 'CONNECTED ✓' : 'NOT CONNECTED ✗'}
      </span>
    </div>
  );
}