import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";
import { BsChevronRight } from 'react-icons/bs';
import { millik, openSans } from "../font";
import Image from 'next/image'
// import Footer from "@/components/common/Footer";
import FormDetails from "@/components/get-started/FormDetails";
import Form from "@/components/get-started/FormikTest";
import FormOne from "@/components/get-started/FormikStepOne";
function page() {
  return (
    <div>
        <Nav />
        <Form />
        {/* <FormDetails/> */}

        <Footer />
    </div>
  )
}

export default page