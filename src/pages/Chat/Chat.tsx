import React from "react";
import ChatMessages from "./ChatMessages";
import ChatMessageForm from "./ChatMessageForm";

const Chat: React.FC = () => {
  const [ws, setWs] = React.useState<WebSocket | null>(null);

  React.useEffect(() => {
    let webSocket: WebSocket;
    const closeHandler = () => {
      console.log("CLOSE");
      setTimeout(createChannel, 3000);
    };

    function createChannel() {
      webSocket?.removeEventListener("close", closeHandler);
      webSocket?.close();

      webSocket = new WebSocket(
        "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
      );

      webSocket.addEventListener("close", closeHandler);
      setWs(webSocket);
    }

    createChannel();

    return () => {
      webSocket.removeEventListener("close", closeHandler);
      webSocket.close();
    };
  }, []);

  return (
    <div>
      <ChatMessages ws={ws} />
      <ChatMessageForm ws={ws} />
    </div>
  );
};

export default Chat;
