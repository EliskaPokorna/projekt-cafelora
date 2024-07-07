export const OrderItem = ({ name, image }) => {
    const baseUrl = "http://localhost:4000"

    return (
      <div className="order-item">
        <img src={`${baseUrl}${image}`} alt={name} className="order-item__image" />
        <div className="order-item__name">{name}</div>
      </div>
    );
};