import { Container } from 'react-bootstrap';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <main className="flex-grow-1" style={{ marginLeft: '250px', padding: '20px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
        <Container fluid className="py-3">
          <Dashboard />
        </Container>
      </main>
    </div>
  );
}

export default App;