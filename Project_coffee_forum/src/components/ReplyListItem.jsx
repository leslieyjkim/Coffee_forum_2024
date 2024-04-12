export default function ReplyListItem(props){

  const {content, likes, user, addReplyLikeOfPost } = props;

    return (
            <article className="ReplyListItem">
              <p>
              <span style={{ fontSize: "1.2em", textAlign: "left" }}>{content}</span> 
                <button onClick={addReplyLikeOfPost} style={{ color: "#f7f1e4", backgroundColor: "#59968d", marginLeft: "10px" }}>
                  Likes: {likes}
                </button>
              </p>
              <p>{user.name}</p>
              <img src={user.profile_url} alt='' />
            </article>
    );
}