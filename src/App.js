import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { DashboardHeader } from "./Header";
import BookingPanel from "./BookingPanel";
import AWBPanel from "./AWBPanel";
import ManifestPanel from "./ManifestPanel";
import StockPanel from "./StockPanel";
import AccountsPanel from "./AccountsPanel";
import ReportsPanel from "./ReportsPanel";
import AdminPanel from "./AdminPanel";
import MasterPanel from "./MasterPanel";
import MISPanel from "./MISPanel";

function App() {
  const [currentPage, setCurrentPage] = useState("Booking");

  const renderPanel = () => {
    switch(currentPage) {
      case "Booking": return <BookingPanel />;
      case "AWB": return <AWBPanel />;
      case "Manifest": return <ManifestPanel />;
      case "Stock": return <StockPanel />;
      case "Accounts": return <AccountsPanel />;
      case "Reports": return <ReportsPanel />;
      case "Admin": return <AdminPanel />;
      case "Master": return <MasterPanel />;
      case "MIS": return <MISPanel />;
      default: return <div>Select a panel</div>;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar items={["Booking","AWB","Manifest","Stock","Accounts","Reports","Admin","Master","MIS"]} onSelect={setCurrentPage} />
      <div style={{ flex: 1, padding: '1.5rem', background: '#f8fafc' }}>
        <DashboardHeader title={`Monopoly Cargo - ${currentPage} Panel`} />
        <div style={{ marginTop: '2rem' }}>
          {renderPanel()}
        </div>
      </div>
    </div>
  );
}

export default App;
