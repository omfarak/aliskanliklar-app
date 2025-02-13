// src/App.jsx
import { ThemeProvider } from './contexts/ThemeContext';
import AddHabit from './pages/addHabit';
import LoginPage from './pages/LoginPage';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <ThemeToggle />
        <main className="main-content">
          <LoginPage />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;