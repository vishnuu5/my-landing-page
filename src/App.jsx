import Hero from "./components/Hero";
import ServiceCards from "./components/ServiceCards";
import PricingTable from "./components/PricingTable";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <div>
      <Hero />
      <ServiceCards />
      <PricingTable />
      <ContactForm />
    </div>
  );
};

export default App;
