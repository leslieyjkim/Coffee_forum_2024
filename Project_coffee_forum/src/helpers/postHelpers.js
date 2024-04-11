export const addPostReply = (forumPost, content) => {
    const newReply = {
      id: forumPost.replies.length + 1,
      authorId: Math.round(Math.random() * 6),
      content,
      likes: 0,
    };
  
    const updatedForumPost = { ...forumPost };
    const updatedReplies = [...forumPost.replies, newReply]; //Add newReply at the end directly
  
    updatedForumPost.replies = updatedReplies;
  
    return updatedForumPost;
  };