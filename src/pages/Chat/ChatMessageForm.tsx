import React from "react";
import { Button } from "antd";

const ChatMessageForm: React.FC<{ ws: WebSocket | null }> = ({ ws }) => {
  const [message, setMessage] = React.useState("");
  const [readyStatus, setReadyStatus] = React.useState<"pending" | "ready">(
    "pending"
  );

  React.useEffect(() => {
    let openHandler = () => {
      setReadyStatus("ready");
    };
    ws?.addEventListener("open", openHandler);

    return () => {
      ws?.removeEventListener("open", openHandler);
    };
  }, [ws]);

  const sendMessageHandler = () => {
    if (!message) {
      return;
    }
    ws?.send(message);
    setMessage("");
  };

  return (
    <div>
      <div>
        <textarea
          onChange={(e) => setMessage(e.currentTarget.value)}
          value={message}
        ></textarea>
      </div>
      <div>
        <Button
          disabled={ws === null || readyStatus !== "ready"}
          onClick={sendMessageHandler}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatMessageForm;
