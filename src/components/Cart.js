import React from "react";

import Product from "../containers/Product";
import ConfirmBuy from "./ConfirmBuy";

import "../css/cart.css";

class Cart extends React.Component {
  componentDidMount() {
    const { setProducts } = this.props;
    //const url = "https://jsonplaceholder.typicode.com/posts?_limit=5";
    const url = "https://5df52cb37305820014bcc784.mockapi.io/prod/prods";
    fetch(url)
      .then(o => o.json())
      .then(o => {
        setProducts(o);
      })
      .catch(e => console.log(e));
  }

  itemCount = (prod, array) => {
    let count = 0;
    array.map(item => {
      if (item.id === prod.id) {
        count = item.count;
      }
    });
    return count;
  };

  render() {
    const { products, total, addedItems } = this.props;
    return (
      <div className="cart">
        {products.length ? (
          products.map(product => (
            <Product
              {...product}
              count={
                addedItems.length ? this.itemCount(product, addedItems) : 0
              }
              key={product.id}
            />
          ))
        ) : (
          <div>Cart is empty</div>
        )}
        <ConfirmBuy total={total} />
      </div>
    );
  }
}

export default Cart;
