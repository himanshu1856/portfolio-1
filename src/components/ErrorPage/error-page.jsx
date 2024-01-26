import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="font-bold text-4xl mb-5">Oops!</h1>
      <p className="mb-5">Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-400">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}