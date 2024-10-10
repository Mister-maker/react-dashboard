import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LeftSideBar from "./components/left-sidebar/LeftSideBar";
import RightSideBar from "./components/right-sidebar/RightSideBar";

function App() {
    return (
        <div className="bg-gray-300">
            <main className="grid grid-cols-1 md:grid-cols-[250px_auto_350px] rounded-2xl bg-white">
                <Router>
                    <LeftSideBar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                    <RightSideBar />
                </Router>
            </main>
        </div>
    );
}

export default App;
