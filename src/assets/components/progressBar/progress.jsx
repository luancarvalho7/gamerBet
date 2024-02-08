import './progress.css';
import gift from '../../images/gift.png';
import blackgift from '../../images/blackgift.png';

import { useLocation } from 'react-router-dom';

export function ProgressBar({fullFill}) {

    const location = useLocation();
    const page = location.pathname;

    const btnClicked = localStorage.getItem('btnClicked');

    const progress = fullFill == true ? '100%' : (page === '/bonus' ? '70%' : '30%');

    return (
        <section id="progressBar" style={ {display: btnClicked == 'true' ? 'none' : 'flex' }}>
            <div className="progressInfo">
                <h1 style={{ color: fullFill == true ? 'black' : 'white' }}>{progress}</h1>
                <img src={fullFill == true ? blackgift : gift} width={18} height={18} />
            </div>
            <div className="progressFil" style={{ width: progress }}></div>
        </section>
    );
}
