import React, { useState, useRef, useEffect } from "react";

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
      <div className="color-txt-rv flex flex-col justify-between h-auto md:h-[70vh] lg:h-[70vh] boxshadow-rv2 bg-white">
        <div className="w-full flex flex-row items-center justify-start pb-1 border-b-2 border-solid border-gray-300 h-[3.5rem] pl-[5px]">
            <i class="fa-solid fa-comments text-gray-300 mr-[12px]"></i>
            <p className="text-blue-500 text-lg md:text-xl lg:text-xl  font-medium ">
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
        <div className="flex items-center p-4 bg-gray-300 rounded-bl-[12px] rounded-br-[12px]">
          <input
            type="text"
            value={inputMessage}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-grow border rounded-md p-2 mr-2 outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatCustomer;
