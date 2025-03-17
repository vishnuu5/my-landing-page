import { useState } from "react";
import Hero from "./components/Hero";
import ServiceCards from "./components/ServiceCards";
import PricingTable from "./components/PricingTable";
import ContactForm from "./components/ContactForm";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Hero />
      <ServiceCards />
      <PricingTable />
      <SearchBar onSearch={setSearch} />
      <UserList search={search} />
      <ContactForm />
    </div>
  );
};

export default App;
