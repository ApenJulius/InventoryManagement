
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import ProfileButton from './components/ProfileButton/ProfileButton';
import SideTab from './components/SideTab/SideTab';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SideTab name="Karl Karlsen" role="Admin" />}>
                    <Route index element={<Main />} />
                </Route>
                <Route path='account' element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
