import React from "react";
import ReactWhatsappButton from "react-whatsapp-button";

function App() {
  return (
    <div className="App d-block d-lg-none">
      <ReactWhatsappButton
        countryCode="57"
        phoneNumber="3232413836"
        animated
      />
    </div>
  )
}

export default App;