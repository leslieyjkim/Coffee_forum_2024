import ReplyListItem from './ReplyListItem';

export default function ReplyList(props){
    const { replies } = props; //extract props here seperately not to make confusing.
    const parsedReplies = replies.map(reply => (
        <ReplyListItem key={reply.id} {...reply} />
    ));
    //When I take all of my individual replies,
    //and I create a ReplyListItem out of it,
    //I'm parsing the raw data of my reply
    //into reply components. 
    //By spreading all the reply ...reply, 
    //I'm just giving all of the keys of reply as props to the ReplyListItem.

    //WAIT!! 
    //We need to add this code below;
    //Array.isArray(replies) && 
    //because, it means, 
    //Hey, reply! Are you an array, if so then do the mapping. 
    //This will prevent crashing if there is nothing in reply.
    
    return (
        //due to the multiple children, wrap them with <section> (not<div>)
        <section className="ReplyList">
            <h1>Replies</h1>
            {parsedReplies}
        </section>
    )
} 