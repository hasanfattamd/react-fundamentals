import "./App.css";
import AvatarCard from "./components/AvatarCard.jsx";

const avatars = [
  {
    id: 1,
    name: "Nova",
    role: "Navigator",
    power: "Routing",
    initials: "NV"
  },
  {
    id: 2,
    name: "Flux",
    role: "State Keeper",
    power: "useState",
    initials: "FX"
  },
  {
    id: 3,
    name: "Memo",
    role: "Optimizer",
    power: "Memoization",
    initials: "MM"

  }
]


function Shell({ title, children }) {
  return (
    <section>
      <h1>Children in React</h1>
      <p>Reusable shell</p>
      <h2>{title}</h2>
      {children}
      <p>This is for test.</p>
    </section>
  )
}

function Colorbutton({ color }) {
  return (
    <div>
      <button style={{ backgroundColor: color }}>Submit</button>
    </div>
  )

}

function App() {
  return (
    <>
      <Colorbutton color="green" />
      <Colorbutton color="blue" />
      <Shell title="Batman">
        <div>
          <h1>Children: This is Heading 1</h1>
          <p>Children:This is paragraph </p>
        </div>
      </Shell>
      <h1>Hello from Mohamed</h1>
      <section>
        {avatars.map((avatar) => (
          <AvatarCard
            key={avatar.id}
            level={avatar.id === 1 ? "Captain" : undefined}
            avatar={avatar} />
        ))}
      </section>
    </>
  );
}

export default App; 
