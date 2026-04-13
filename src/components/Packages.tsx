const packages = [
  { name: "basic", price: "$50" },
  { name: "premium", price: "$70" },
  { name: "luxury", price: "$100" },
];

export default function Packages() {
  return (
    <div className="py-20 px-10">
      <h2 className="text-center text-3xl mb-10">
        our popular packages
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((p, i) => (
          <div key={i} className="card bg-base-200 p-6">
            <div className="h-40 bg-gray-300 mb-4"></div>

            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p>starting price {p.price}</p>

            <ul className="my-4 list-disc ml-4">
              <li>feature</li>
              <li>feature</li>
              <li>feature</li>
            </ul>

            <button className="btn rounded-full">
              view details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}