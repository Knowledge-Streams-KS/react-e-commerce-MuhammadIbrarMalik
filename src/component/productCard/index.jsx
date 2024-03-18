/* eslint-disable react/prop-types */

function ProductCard(props) {
  return (
    <div className="ProductCard">
      <img src={props.image} alt="Product Image" />
      <div className="cardDetails">
        <h3>
          <b>Title:</b> {props.title}
        </h3>
        <p>
          <b>Price:</b> {props.price}
        </p>
        <p>
          <b>Category:</b> {props.category}
        </p>
        <p>
          <b>Description:</b> {props.description}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
