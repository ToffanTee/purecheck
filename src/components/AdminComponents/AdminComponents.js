import { useState } from "react";
import SideNav from "./SideNav";
import CompanyForm from "./CompanyForm";
import ProductForm from "./ProductForm";
import GenerateQrCode from "./GenerateQrCode";

const AdminComponents = () => {
  const [showCompanyForm, setShowCompanyForm] = useState(true);
  const [showProductForm, setShowProductForm] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);

  const displayCompanyForm = () => {
    if (!showCompanyForm) {
      setShowCompanyForm(true);
      setShowProductForm(false);
      return setShowQrCode(false);
    }
  };

  const displayProductForm = () => {
    if (!showProductForm) {
      setShowProductForm(true);
      setShowCompanyForm(false);
      return setShowQrCode(false);
    }
  };

  const displayQrCode = () => {
    if (!showQrCode) {
      setShowProductForm(false);
      setShowCompanyForm(false);
      return setShowQrCode(true);
    }
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <SideNav
        displayCompanyForm={displayCompanyForm}
        displayProductForm={displayProductForm}
        displayQrCode={displayQrCode}
      />
      {showCompanyForm && <CompanyForm />}
      {showProductForm && <ProductForm />}
      {showQrCode && <GenerateQrCode />}
    </div>
  );
};

export default AdminComponents;
