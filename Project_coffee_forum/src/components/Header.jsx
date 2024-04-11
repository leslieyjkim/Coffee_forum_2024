import {useState} from "react";

export default function Header(props) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  // console.log("Hello!", count);

    return (
        <header className="Header">
        <h1>Super Coffee Forum</h1>
        <h2 onClick={handleClick}>{count}</h2>
      </header>
    )
}