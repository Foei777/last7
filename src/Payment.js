import React, { useState, useEffect } from "react";
import "./Payment.css";

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://www.infoquest.co.th/wp-content/uploads/2022/11/20221109_canva_%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%A1-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%B1%E0%B8%81-Hotel-1.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      </div>
    </div> 
    <form action="https://paym-2b14669fa746.herokuapp.com/create-checkout-session" method="POST">
      <button type="submit">
        ชำระเงิน
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}