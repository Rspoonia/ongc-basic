import React, { useReducer, useState } from "react";
import "./style.css";
import UserAddressUI from "./userAddressUI";

const updateAddress = (state, action) => {};

const UserAddress = () => {
  const initialState = {
    houseNo: "1st Block",
    buildingName: "Shanti Nagar",
    colonyName: "Akshya Nagar",
    landMark: "1st Cross, Rammurthy nagar, Mira Road",
    city: "Thane, Maharashtra",
    pinCode: "401105",
  };
  const [address, dispatchAddress] = useReducer(updateAddress, {
    ...initialState,
  });
  const [showChangeAddress, setChangeAddress] = useState(false);
  const onChangeAddress = () => {
    setChangeAddress(true);
  };

  return (
    <>
      <footer className="footer-wrapper">
        <section className="footer-inner-wrapper">
          <UserAddressUI address={address} onChangeAddress={onChangeAddress} />
        </section>
      </footer>
    </>
  );
};

export default UserAddress;
