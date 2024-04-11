import { useState } from "react";

export default function ReplyForm(props) {
  const {onSubmit} = props;

  const initialValues = {comment:""}
  const [formData, setFormData] =useState(initialValues);


  const handleChange = (event) => {
    const {value, name} = event.target

    const updatedFormData = { ...formData, [name]:value} //Remember how [] evaluates an object? 
    //taking everything from formData (...formData), and then for the value of name(comment), take the value that I just extracted.
    setFormData(updatedFormData)
  }


//Below: Hey, can we prevent the default action of a form,
//which is to refresh the page and send a information.
//And then, after that I want to call the onSubmit prop with the value of comment. 
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData(initialValues); //set the FormData back to initialvalues.
  }
    return (
        <form className="ReplyForm" onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='Enter your comment' 
          value={formData.comment}
          name="comment" 
          onChange={handleChange} 
        />
        <button>Add comment</button>
      </form>
    )
}