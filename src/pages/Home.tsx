import { useOutletContext } from "react-router-dom"
export default function Home() {

  const [user, setUser] = useOutletContext();
  return (
    <div>
      {
        user !== null ?
        <h1>{user}</h1>
        : <h1>Not logged in</h1>
      }
    </div>
  )
}
