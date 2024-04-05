import React from "react";
import useGetConversation from "../../hooks/useGetConversation";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  // console.log("CONVERSATIONS:", conversations);
  return (
    <div className=" py-2 flex flex-col overflow-auto">
      {conversations.map((convo, idx) => (
        // console.log("newConvo", convo);
        <Conversation
          key={convo._id}
          conversation={convo}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};

export default Conversations;
