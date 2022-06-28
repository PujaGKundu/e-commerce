import Products from "./Products";

function Main(props) {
  return (
    <div className="main flex-80">
      <Products
        data={props.products}
        selectedSize={props.selectedSize}
        handleAddToCart={props.handleAddToCart}
      />
    </div>
  );
}

export default Main;
