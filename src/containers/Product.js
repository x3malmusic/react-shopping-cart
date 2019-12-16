import { connect } from "react-redux";

import Product from "../components/Product";
import { addCount } from "../redux/actions/cart";
import { setProducts } from "../redux/actions/product";

const mapStateToProps = ({ products: { products }, cart: { addedItems } }) => ({
  addedItems,
  products
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addCount(item)),
  setProducts: products => dispatch(setProducts(products))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
