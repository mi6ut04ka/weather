import './sidePanel.sass'
import icon from '../../resources/icon/WeatherIcon - 2-39.png'

const SidePanel = () => {
    return (
    <div className='sidePanel'>
        <div className="d">
            <div className="sidePanel__dateAndTime">
                <div className="sidePanel__date"><span>Четверг</span>, 20 Августа</div>
                <div className="sidePanel__time">01:00 PM</div>
            </div>
            <div className="sidePanel__degressAndWind">
                <div className="sidePanel__degress">20°</div>
                <div className="sidePanel__wind">
                    <img src="" alt="" />
                    <div className="sidePanel__wind__speed">Северный, 40.2 км/ч</div>
                </div>
            </div>
            <div className="sidePanel__pressureAndMinMax">
                <div className="sidePanel__pressure"><span>Давление: </span>768 мм рт.ст</div>
                <div className="sidePanel__min"><span>Минимальная температура: </span>15°</div>
                <div className="sidePanel__max"><span>Максимальная температура: </span>24°</div>
            </div>
        </div>
        <div className="sidePanel__divider"></div>
        <div className="sidePanel__nextDay">
            <div className="sidePanel__nextDay__text">Погода на следующие 4 дня</div>
            <div className="sidePanel__nextDay__block">
                <img src={icon} alt="" />
                <div>
                    <div className="sidePanel__nextDay__date">Пятница, 21 Августа</div>
                    <div className="sidePanel__nextDay__descr">Очень холодно</div>
                </div>
                <div className="sidePanel__nextDay__divider"></div>
                <div className="sidePanel__nextDay__degress">20°</div>
            </div>
            <div className="sidePanel__nextDay__block">
                <img src={icon} alt="" />
                <div>
                    <div className="sidePanel__nextDay__date">Пятница, 21 Августа</div>
                    <div className="sidePanel__nextDay__descr">Очень холодно</div>
                </div>
                <div className="sidePanel__nextDay__divider"></div>
                <div className="sidePanel__nextDay__degress">20°</div>
            </div>
            <div className="sidePanel__nextDay__block">
                <img src={icon} alt="" />
                <div>
                    <div className="sidePanel__nextDay__date">Пятница, 21 Августа</div>
                    <div className="sidePanel__nextDay__descr">Очень холодно</div>
                </div>
                <div className="sidePanel__nextDay__divider"></div>
                <div className="sidePanel__nextDay__degress">20°</div>
            </div>
            <div className="sidePanel__nextDay__block">
                <img src={icon} alt="" />
                <div>
                    <div className="sidePanel__nextDay__date">Пятница, 21 Августа</div>
                    <div className="sidePanel__nextDay__descr">Очень холодно</div>
                </div>
                <div className="sidePanel__nextDay__divider"></div>
                <div className="sidePanel__nextDay__degress">20°</div>
            </div>
        </div>
    </div>
    );
}
 
export default SidePanel;