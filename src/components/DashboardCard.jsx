export default function DashboardCard({ title, description, icon, onClick }) {
  return (
    <div className="dashboard-card" onClick={onClick}>
      <div className="dashboard-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
