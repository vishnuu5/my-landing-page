const pricingPlans = [
    { name: "Basic", price: "$10/month", features: ["1 Project", "Basic Support"] },
    { name: "Pro", price: "$30/month", features: ["5 Projects", "Priority Support"] },
    { name: "Enterprise", price: "$50/month", features: ["Unlimited Projects", "24/7 Support"] },
  ];
  
  const PricingTable = () => {
    return (
      <section className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Pricing Plans</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-2xl font-bold">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default PricingTable;
  