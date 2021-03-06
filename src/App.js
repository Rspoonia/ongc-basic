import AddressUI from "./components/mapui/address";
import UserAddress from "./components/user-address";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Add Address</header>
      <AddressUI />
      <UserAddress />
    </div>
  );
}

export default App;
