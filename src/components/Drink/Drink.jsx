import './Drink.css';
import { Layer } from '../Layer/Layer';

export const Drink = ({ id, name, ordered, image, layers }) => {
    const baseUrl = "http://localhost:4000"

    return (
        <div className="drink">
            <div className="drink__product">
                <div className="drink__cup">
                    <img src={`${baseUrl}${image}`} alt={name} />
                </div>
                <div className="drink__info">
                    <h3>{name}</h3>
                    {layers.map((layer, index) => (
                        <Layer key={index} color={layer.color} label={layer.label} />
                    ))}
                </div>
            </div>
            <form className="drink__controls" data-id={id}>
                <input type="hidden" className="order-id" value={id} />
                <button className={`order-btn ${ordered ? 'order-btn--ordered' : ''}`}>
                    {ordered ? 'Zrušit' : 'Objednat'}
                </button>
            </form>
        </div>
    )
}