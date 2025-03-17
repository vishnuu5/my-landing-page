const services = [
    { title: "Web Development", description: "Building modern web applications" },
    { title: "SEO Optimization", description: "Improving search engine rankings" },
    { title: "Cloud Hosting", description: "Secure and scalable cloud solutions" },
  ];
  
  const ServiceCards = () => {
    return (
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ServiceCards;
  