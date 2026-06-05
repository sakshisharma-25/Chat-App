import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

	useEffect(() => {
		// Listen for incoming messages from the socket server
		socket?.on("newMessage", (newMessage) => {
			// Trigger the shake animation property
			newMessage.shouldShake = true;

			// Play the notification sound
			const sound = new Audio(notificationSound);
			sound.play().catch((error) => console.log("Audio play blocked:", error));

			// Add new message to existing messages
			setMessages([...messages, newMessage]);
		});

		// Cleanup: remove the listener when the component unmounts
		return () => socket?.off("newMessage");
	}, [socket, messages, setMessages]);
};

export default useListenMessages;