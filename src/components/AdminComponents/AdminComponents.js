import { useState } from "react";
import SideNav from "./SideNav";
import ProductForm from "./ProductForm";
import GenerateQrCode from "./GenerateQrCode";

const AdminComponents = () => {
  const [showProductForm, setShowProductForm] = useState(true);
  const [showQrCode, setShowQrCode] = useState(false);

  const displayProductForm = () => {
    if (!showProductForm) {
      setShowProductForm(true);
      return setShowQrCode(false);
    }
  };

  const displayQrCode = () => {
    if (!showQrCode) {
      setShowProductForm(false);
      return setShowQrCode(true);
    }
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <SideNav
        displayProductForm={displayProductForm}
        displayQrCode={displayQrCode}
      />
      {showProductForm && <ProductForm />}
      {showQrCode && <GenerateQrCode />}
    </div>
  );
};

export default AdminComponents;
