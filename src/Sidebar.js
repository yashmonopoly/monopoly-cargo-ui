export function Sidebar({ items, onSelect }) {
  return (
    <div className="sidebar">
      <h2 className="text-lg font-bold mb-4">Monopoly Cargo</h2>
      {items.map((item) => (
        <button key={item} onClick={() => onSelect(item)}>{item}</button>
      ))}
    </div>
  );
}
