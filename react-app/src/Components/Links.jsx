import {Link} from 'react-router-dom'

export function Links()
{

    return (
        <ul className="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page-1">Page 1</Link></li>
            <li><Link to="/page-2">Page 2</Link></li>
            <li><Link to="/sandbox">Sandbox</Link></li>
        </ul>

    );
}