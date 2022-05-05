export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

type SubscribersType = (messages: ChatMessageType[]) => void;

let subscribers = [] as SubscribersType[];

let webSocket: WebSocket | null;

const closeHandler = () => {
  console.log("CLOSE");
  setTimeout(createChannel, 3000);
};

const messagesHandler = (e: MessageEvent) => {
  let newMessage = JSON.parse(e.data);
  subscribers.forEach((s) => s(newMessage));
};

function createChannel() {
  webSocket?.removeEventListener("close", closeHandler);
  webSocket?.close();

  webSocket = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
  );
  webSocket.addEventListener("close", closeHandler);
  webSocket.addEventListener("message", messagesHandler);
}

export const chatApi = {
  start() {
    createChannel();
  },
  stop() {
    subscribers = [];
    webSocket?.removeEventListener("close", closeHandler);
    webSocket?.removeEventListener("message", messagesHandler);
    webSocket?.close();
  },
  subscribe(callback: SubscribersType) {
    subscribers.push(callback);
    return () => {
      subscribers = subscribers.filter((s) => s !== callback);
    };
  },
  unsubscribe(callback: SubscribersType) {
    subscribers = subscribers.filter((s) => s !== callback);
  },
  sendMessage(message: string) {
    webSocket?.send(message);
  },
};
