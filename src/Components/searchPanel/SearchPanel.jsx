import './searchPanel.sass'
import glass from '../../resources/icon/glass.svg'

const SearchPanel = () => {
    return ( 
    <div className="searchPanel">
        <div className="searchPanel__search">
            <input type="text" placeholder='Ваш город'/>
            <img src={glass} alt='glass'/>
        </div>
        <div className="searchPanel__list">
            <div className="searchPanel__object">
                <div className="searchPanel__object__city">Ангарск</div>
                <div className="searchPanel__object__region">Иркутская область</div>
                <div className="searchPanel__object__country">Россия</div>
            </div>
        </div>
    </div>
    );
}
 
export default SearchPanel;