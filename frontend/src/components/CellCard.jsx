export default function CellCard({ name, value }) {
  return (
    <div style={{
      background: '#1F2937',
      color: 'white',
      borderRadius: '10px',
      padding: '10px',
      textAlign: 'center',
      width: '70px',
      height: '70px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '5px'
    }}>
      <span style={{ fontSize: '12px' }}>{name}</span>
      <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{value} V</span>
    </div>
  );
}