import './rootLayout.css'
import { Link } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className="rootLayout">
           <header>
            <Link to ="/">
                <img src="./logo.png" alt="logo" />
                <span>AI X</span>
            </Link>
           </header>
        </div>
    )
}

export default RootLayout