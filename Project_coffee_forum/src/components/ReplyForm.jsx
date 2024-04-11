import { useState } from "react";

export default function ReplyForm(props) {
  const {onSubmit} = props;

  const [comment, setComment] =useState("");

  const handleChange = (event) => {
    const {value} = event.target
    setComment(value)
  }
//Below: Hey, can we prevent the default action of a form,
//which is to refresh the page and send a information.
//And then, after that I want to call the onSubmit prop with the value of comment. 
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(comment)
    setComment(""); //Once I've submitted I could set the comment back to an empty string. 
  }
    return (
        <form className="ReplyForm" onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='Enter your comment' 
          value={comment} 
          onChange={handleChange} 
        />
        <button>Add comment</button>
      </form>
    )
}