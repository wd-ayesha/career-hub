import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
       <h1 className="font-bold text-8xl text-red-700">404</h1>
      <p className="font-bold text-2xl">Sorry, an unexpected error has occurred.</p>
      <p className="font-semibold text-xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}