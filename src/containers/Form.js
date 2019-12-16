import { connect } from "react-redux";

import Form from "../components/Form";

const mapStateToProps = ({ cart: { addedItems } }) => ({
  total: addedItems.reduce((total, item) => total + item.price * item.count, 0)
});

export default connect(mapStateToProps)(Form);
