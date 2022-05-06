import React from "react";
import { useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { AppStateType } from "../../redux/redux-store";

const ChatMessages: React.FC = () => {
  const [isAutoScroll, setIsAutoScroll] = React.useState(true);

  const messages = useSelector((state: AppStateType) => state.chat.messages);
  const messagesAnchorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isAutoScroll) {
      messagesAnchorRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    let element = e.currentTarget;
    if (
      Math.abs(
        element.scrollHeight - element.scrollTop - element.clientHeight
      ) < 300
    ) {
      !isAutoScroll && setIsAutoScroll(true);
    } else {
      isAutoScroll && setIsAutoScroll(false);
    }
  };

  const style = {
    height: "550px",
    overflowY: "auto",
  };

  return (
    //@ts-ignore
    <div style={style} onScroll={scrollHandler}>
      {messages.map((m) => (
        <ChatMessage key={m.id} message={m} />
      ))}
      <div ref={messagesAnchorRef}></div>
    </div>
  );
};

export default ChatMessages;
