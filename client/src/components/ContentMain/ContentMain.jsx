import "./ContentMain.css";
import Transactions from "../Transactions/Transactions";
import Report from "../Report/Report";
import Cards from "../Cards/Cards";


const ContentMain = () => {
  return (
    <div className="main-content-holder">
        <div className="content-grid">
            <Transactions />
        </div>
        
    </div>
  )
}

export default ContentMain
