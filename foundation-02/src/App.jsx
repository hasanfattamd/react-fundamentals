import "./App.css";
const shows = [
  { id: 1, title: "The Component Returns", time: "10:00 AM", hall: "Hall A" },
  { id: 2, title: "Attack of Re-render", time: "12:30 PM", hall: "Hall B" },
  { id: 3, title: "Virtual DOM Knights", time: "04:00 PM", hall: "Hall c" },
];

// fetch -> API -> Data -> Variable

async function fetchData() {
  try {
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1",
      {
        method: "GET",
      },
    );
    const data = await response.json();
    // console.log(data.message);
    return data;
  } catch (error) {
    console.log(error);
  }
}
function App() {
  const result = fetchData();
  return (
    <>
      <div>
        {result.map((joke) => (
          <article>{joke.message}</article>
        ))}
      </div>
      <h1>Hello from Somewhere 1 </h1>
      <section className="grid">
        {shows.map((show) => (
          <article>
            <p className="tag">{show.hall}</p>
            <h3>{show.title}</h3>
            <p>{show.time}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default App;
