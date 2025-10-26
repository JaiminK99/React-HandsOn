import { useSelector } from "react-redux";

function Customer() {
  // To read data from Redux store, use the useSelector hook
  const customer = useSelector((store) => store.customer.fullName);

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
