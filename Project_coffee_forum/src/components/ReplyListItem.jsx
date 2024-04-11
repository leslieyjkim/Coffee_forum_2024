export default function ReplyListItem(props){

  const {content, likes, user} = props;

    return (
            <article className="ReplyListItem">
              <p><span>{content}</span> <button>Likes: {likes}</button></p>
              <p>{user.name}</p>
              <img src={user.profile_url} alt='' />
            </article>
    )
}