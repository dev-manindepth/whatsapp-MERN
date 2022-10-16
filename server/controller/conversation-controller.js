import Conversation from "../model/conversationSchema.js";

export const newConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const exist = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (exist) {
      return res.status(200).json("conversation already exits");
    }
    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });
    await newConversation.save();
    return res.status(200).json("conversation saved successfully");
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

export const getConversation = async (req, res) => {
  const { senderId, receiverId } = req.body;

  try {
    let conversation = await Conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });
    return res.status(200).json(conversation);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
