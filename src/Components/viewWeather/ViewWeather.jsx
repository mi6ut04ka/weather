import './viewWeather.sass'
import cloud from '../../resources/img/cloudy.jpg'
import SearchPanel from '../searchPanel/SearchPanel';
import location from '../../resources/icon/location-dot-solid.svg'

const ViewWeather = () => {
    return (
    <div className='viewWeather' style={{background: `url(${cloud})`}}>
        <div className="viewWeather__geo">
            <img className='viewWeather__geo__img' src={location} alt="location" />
            <div className="viewWeather__geo__name"><span>Ангарск</span>, Россия</div>
            <SearchPanel/>
        </div>
        
        <div className="viewWeather__forecast">Прогноз погоды</div>
        <div className="viewWeather__main">Облачно</div>
        <div className="viewWeather__descr">Небольшой дождь</div>
        <img className='viewWeather__img' src="" alt="" />
    </div> 
    );
}
 
export default ViewWeather;