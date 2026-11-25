import NavBar from "../components/NavBar";
import FooterAdmin from "../components/FooterAdmin";

//ASSETS
import underConsImg from "../assets/images/under-cons.jpg";

import InquiryInbox from "../components/AdminInquiry";

export default function Admin() {
  return (
    <>
      <NavBar />
      <section className="w-full bg-[#fafafa] text-[#1a1a1a] font-sans antialiased py-10 px-6 md:px-10 selection:bg-black selection:text-white">
        {/* Maximum structural bounding box */}

        <img
          src={underConsImg}
          alt="under cons image"
          // className="w-auto h-120 mx-auto"
          className="w-full max-w-md md:max-w-lg h-auto"
        />

        <InquiryInbox />
      </section>
      <FooterAdmin />
    </>
  );
}
