import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
import Electronic from "./Electronic"
import Footwear from "./Footwear"
import Fashion from "./Fashion"

function Home() {
  return (
    <div>
      <h2>Welcome to Shopping Store 🛒</h2>
      <p>Select a category from above to start shopping!</p>
    </div>
  );
}

export default function ShoppingIndex() {
  return (
    <div className="container-fluid">
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/electronics">Electronic</Link></li>
          <li><Link to="/footwear">Footwear</Link></li>
          <li><Link to="/fashion">Fashion</Link></li>
        </ul>
        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electronics" element={<Electronic />} />
          <Route path="/footwear" element={<Footwear />} />
          <Route path="/fashion" element={<Fashion />} />
        </Routes>
      </Router>
    </div>
  );
}