import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";
import { BsChevronRight } from 'react-icons/bs';
import { millik, openSans } from "../font";
import Image from 'next/image'
// import Footer from "@/components/common/Footer";
import FormDetails from "@/components/get-started/FormDetails";
function page() {
  return (
    <div>
        <Nav />
        <FormDetails/>
        <Footer />
    </div>
  )
}

export default page