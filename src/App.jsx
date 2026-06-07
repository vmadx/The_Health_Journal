import { JournalProvider } from "./context/JournalContext";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DayTabs from "./components/DayTabs";
import LeftPage from "./components/LeftPage";
import RightPage from "./components/RightPage";
import StickerPanel from "./components/StickerPanel";
import BottomToolbar from "./components/BottomToolbar";
import "./App.css";

function AppContent() {
  return (
    <div className="app">
      <div className="app__texture" aria-hidden="true" />
      <Sidebar />

      <main className="workspace">
        <div className="notebook-area">
          <DayTabs />
          <div className="notebook">
            <div className="notebook__spine" aria-hidden="true" />
            <LeftPage />
            <RightPage />
          </div>
          <Header />
        </div>

        <StickerPanel />
      </main>

      <BottomToolbar />
    </div>
  );
}

export default function App() {
  return (
    <JournalProvider>
      <AppContent />
    </JournalProvider>
  );
}
