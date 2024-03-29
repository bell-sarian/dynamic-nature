import * as React from "react";;
import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (React.createElement("div", { id: "error-page" },
        React.createElement("h1", null, "Oops!"),
        React.createElement("p", null, "Sorry, an unexpected error has occurred."),
        React.createElement("p", null,
            React.createElement("i", null, error.statusText || error.message))));
}
