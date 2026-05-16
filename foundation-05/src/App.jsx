import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("idle");
  const [seconds, setSeconds] = useState(10);

  const addData = () => {
    setPosts([...posts, "hitesh", "chaicode"]);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((current) => Math.max(current - 1, 0));
    }, 1000);
    return () => {
      // cleanup code
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    async function loadPosts() {
      try {
        setStatus("Loading");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5",
          { signal: controller.signal },
        );
        const data = await response.json();
        data.map((obj) => console.log(obj))
        setPosts(data);
        setStatus("success");
      } catch (err) {
        if (err.name == "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setStatus("Error");
        }
      }
    }
    loadPosts();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      <h1>useEffect</h1>
      <h1>{seconds}</h1>
      <button onClick={addData}></button>
    </>
  );
}

export default App;





