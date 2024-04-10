import ReplyListItem from './ReplyListItem';

export default function ReplyList(props){
    return (
        //due to the multiple children, wrap them with <section> (not<div>)
        <section className="ReplyList">
            <h1>Replies</h1>
            <ReplyListItem />
            <ReplyListItem />
            <ReplyListItem />
        </section>
    )
}