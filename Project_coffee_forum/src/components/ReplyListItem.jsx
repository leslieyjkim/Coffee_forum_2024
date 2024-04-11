export default function ReplyListItem(props){

  const {content, user} = props;

    return (
            <article className="ReplyListItem">
              <p>{content}</p>
              <p>{user.name}</p>
              <img src={user.profile_url} alt='' />
            </article>
    )
}