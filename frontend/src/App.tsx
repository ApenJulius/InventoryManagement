
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import ProfileButton from './components/ProfileButton/ProfileButton';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProfileButton />}>
                    <Route index element={<Main />} />
                </Route>
                <Route path='account' element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
