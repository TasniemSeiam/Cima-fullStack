import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main>
          <h1 style={{ textAlign: "center", marginTop: "10px", color:"red" }}>404 Not Found</h1>
          <Link to=".." relative="path" style={{ textAlign: "center", marginTop: "10px", color:"red" }}  >Back</Link>
    </main>
  );
}
