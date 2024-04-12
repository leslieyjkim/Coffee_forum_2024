export default function ReplyListItem(props){

  const {content, likes, user, addReplyLikeOfPost } = props;

    return (
            <article className="ReplyListItem">
              <p>
              <span>{content}</span>
              <br></br>
              <br></br>
              <button onClick={addReplyLikeOfPost} className="Replybutton-style">
                  Likes: {likes}
              </button>
              </p>
              <p>{user.name}</p>
              <img src={user.profile_url} alt='' />
            </article>
    );
}