import { connect } from "react-redux";

import Cart from "../components/Cart";
import { setProducts } from "../redux/actions/product";

const mapStateToProps = ({ products: { products }, cart: { addedItems } }) => ({
  products,
  total: addedItems.reduce((total, item) => total + item.price * item.count, 0),
  addedItems
});

const mapDispatchToProps = dispatch => ({
  setProducts: products => dispatch(setProducts(products))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
