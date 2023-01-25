import "./CartItem.scss";

const CartItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <div className="numbers">
          <span>{`${quantity} pcs`}</span><span className="price"> ${quantity*price}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
