import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "../css/product.css";
const Product = props => {
  const {
    title,
    body,
    price,
    count,
    id,
    products,
    setProducts,
    addItem,
    addedItems
  } = props;

  const changeCount = obj => {
    if (obj.count > 50) {
      return;
    }
    if (obj.count < 0) {
      return;
    }
    let items = [];
    let exist = false;
    if (addedItems.length) {
      items = [...addedItems];
      items.map((item, i) => {
        if (item.id === obj.id) {
          items[i].count = obj.count;
          exist = true;
        }
      });
    }
    if (exist) {
      addItem(items);
    } else {
      items.push(obj);
      addItem(items);
    }
  };

  const deleteItem = id => {
    const productItems = [...products].filter(product => product.id !== id);
    const cartItems = [...addedItems].filter(product => product.id !== id);
    setProducts(productItems);
    addItem(cartItems);
  };

  return (
    <div className="cart">
      <div className="product-wrap">
        <div className="product-content">
          <div className="product-img-wrap">
            <img
              className="product-img"
              src="https://3som7g1wlb51jknvc1rs79q9-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/coming-soon.png"
              alt="product"
            />
          </div>
          <div className="product-cred">
            <div className="product-title">{title}</div>
            <div className="product-desc">{body}</div>
          </div>
        </div>
        <div className="product-count-wrap">
          <div className="product-container">
            <div className="product-trash">
              <FontAwesomeIcon onClick={e => deleteItem(id)} icon={faTrash} />
            </div>
            <div className="product-count">
              <button
                onClick={e => changeCount({ id, price, count: count - 1 })}
              >
                -
              </button>
              <div className="counter">{count}</div>
              <button
                onClick={e => changeCount({ id, price, count: count + 1 })}
              >
                +
              </button>
              <div className="product-price">{`${price}$`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
