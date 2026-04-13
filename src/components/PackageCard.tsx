type PackageCardProps = {
  title: string;
  price: string;
  features: string[];
};

export default function PackageCard({ title, price, features }: PackageCardProps) {
  return (
    <div className="card bg-base-200 shadow-sm h-full">
      <div className="card-body">
        <div className="h-40 rounded-2xl bg-base-300 mb-4 flex items-center justify-center text-sm opacity-70">
          Package image
        </div>

        <h3 className="card-title text-2xl">{title}</h3>
        <p className="font-semibold">Starting at {price}</p>

        <ul className="mt-3 space-y-2 text-sm">
          {features.map((feature) => (
            <li key={feature}>• {feature}</li>
          ))}
        </ul>

        <div className="card-actions mt-6">
          <button className="btn rounded-full">View Details</button>
        </div>
      </div>
    </div>
  );
}