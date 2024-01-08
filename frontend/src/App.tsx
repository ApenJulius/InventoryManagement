
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import SideTab from './components/SideTab/SideTab';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
