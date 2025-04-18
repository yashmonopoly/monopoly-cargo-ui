export function DashboardHeader({ title }) {
  return (
    <div style={{ paddingBottom: '1rem', borderBottom: '1px solid #ccc' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{title}</h1>
    </div>
  );
}
