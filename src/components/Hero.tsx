import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="min-h-[70vh] flex items-center px-10 bg-base-200">
      <div>
        <h1 className="text-5xl font-bold max-w-xl">
          stunning balloon decorations for every occasion
        </h1>

        <p className="mt-6 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </p>

        <Link to="/quote" className="btn mt-6 rounded-full">
          get a free quote
        </Link>
      </div>
    </div>
  );
}