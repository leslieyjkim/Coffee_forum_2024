import {useState} from "react";

export default function Header(props) {
  const [count, setCount] = useState({ value: 1 });

  const handleClick = () => {
    const newObject = { value: count.value + 1};
    //concept of spreading '...'
    //Remember that setCount or 'setState' is like a 'commit' 
    //like you manipulate your data, you do bunch of things => once you are happy then you set the state! (not in the process of modifying something)
    setCount(newObject);
  };

  // console.log("Hello!", count);

    return (
        <header className="Header">
        <h1>Super Coffee Forum</h1>
        <h2 onClick={handleClick}>{count.value}</h2>
      </header>
    )
}