import { useRouteLoaderData } from "react-router-dom";
import Card from "../Components/Card";
import CardActors from "../Components/Card/IndexActors";

export default function ActorsPage() {
    const data = useRouteLoaderData('mango')

    return <main>
        <h2>Welcome to our actors page</h2>
        <CardActors movies={ data} />
    </main>
}