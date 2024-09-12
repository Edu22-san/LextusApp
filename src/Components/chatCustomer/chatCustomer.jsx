import React, { useState, useRef, useEffect } from "react";
import "./chatCustomer.css";
const ChatCustomer = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      // Usamos la forma de función para asegurar la actualización correcta del estado
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMessage, sender: "customer" },
      ]);
      setInputMessage("");
      simulateResponse();
    }
  };

  const simulateResponse = () => {
    // Simulamos una respuesta después de un breve período de tiempo
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Response from lextus!", sender: "system" },
      ]);
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="color-txt-rv flex flex-col justify-between  card-chat-customer bg-white card-dashboard-customer3">
        <div className="w-full flex flex-row items-center justify-start border-b-2 border-solid border-gray-300 p-[7px]">
            <i className="fa-solid fa-comments text-gray-300 mr-[8px]"></i>
            <p className="text-blue-500 text-lg md:text-[13px] lg:text-[13px]  font-bold ">
            Need help? leave your message
            </p>
        </div>
        <div className="chat-messages overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.sender === "customer" ? "text-right" : "text-left"
              } mb-2`}
            >
              <div
                className={`${
                  message.sender === "customer"
                    ? "bg-blue-500 text-white"
                    : message.sender === "system"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-black"
                } p-2 rounded-md inline-block`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>
        <div className="flex items-center py-[8px] bg-gray px-[5px] rounded-bl-[12px] rounded-br-[0px]">
          <input
            type="text"
            value={inputMessage}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-grow border-[2px] border-solid border-[#0a186b] rounded-md text-[13px] p-[3px]"
          />
          <button
            onClick={handleSendMessage}
            className="text-white rounded-md"
          >
            <i className="fa-solid fa-paper-plane-top text-[#061056] text-[15px] ml-[5px]"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatCustomer;
