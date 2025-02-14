// src/App.jsx
import { ThemeProvider } from './contexts/ThemeContext';
import AddHabit from './pages/AddHabit/addHabit';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/Register/Register';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import './styles/global.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <ThemeToggle />
          <main className="main-content">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/add-habit" element={<AddHabit />} />
              <Route path="/" element={<LoginPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;