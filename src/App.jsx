import Hero from "../Sections/Hero";
import Popularproduct from "../Sections/PopularProduct";
import SuperQuality from "../Sections/SuperQuality";
import Subscribe from "../Sections/Subscribe";
import SepecialProduct from "../Sections/SpecialProduct";
import Footer from "../Sections/Footer";
import Service from "../Sections/Service";
import CustomerService from "../Sections/CustomerService";


function App() {
  return (
    <>
    <main className="relative">
      nav
      <section className="padding-b xl:padding-1 wide:padding-r">
        <Hero/>
      </section>
      <section className="padding">
        <Popularproduct/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Service/>
      </section>
      <section className="padding">
        <SepecialProduct/>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerService/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer/>
      </section>
    </main>
    </>
  )
}

export default App
