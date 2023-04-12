import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
       <h1 className="font-bold text-3xl text-red-700">404</h1>
      <h2>Oops!</h2>
      <p className="font-semibold">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}