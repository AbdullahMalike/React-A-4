import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Sc1 from "../Screens/sc1";
import Sc2 from "../Screens/sc2";
import Sc3 from "../Screens/sc3";
import Sc4 from "../Screens/sc4";
import Sc5 from "../Screens/sc5";

export default function Router() {
    return <>
        <BrowserRouter>
            <nav>
                <Link to="/sc1">Page 1</Link> <br />
                <Link to="/sc2">Page 2</Link> <br />
                <Link to="/sc3">Page 3</Link> <br />
                <Link to="/sc4">Page 4</Link> <br />
                <Link to="/sc5">Page 5</Link>
            </nav>
            <Routes>
                <Route path="sc1" element={<Sc1 />} />
                <Route path="sc2" element={<Sc2 />} />
                <Route path="sc3" element={<Sc3 />} />
                <Route path="sc4" element={<Sc4 />} />
                <Route path="sc5" element={<Sc5 />} />
            </Routes>
        </BrowserRouter>
    </>

}