import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Disculpe, ha ocurrido un error</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}