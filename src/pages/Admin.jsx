import FooterAdmin from "../components/FooterAdmin";

//ASSETS
import underConsImg from "../assets/images/under-cons.jpg";

import InquiryInbox from "../components/ReceivedInquiry";
import UserManagement from "../components/UserManagement";

export default function Admin() {
  return (
    <>
      <section className="w-full flex flex-col gap-6 bg-[#fafafa] text-[#1a1a1a] font-sans antialiased py-10 px-6 md:px-10 selection:bg-black selection:text-white">
        {/* Maximum structural bounding box */}

        <img
          src={underConsImg}
          alt="under cons image"
          className="w-full max-w-md md:max-w-lg h-auto"
        />

        <InquiryInbox />

        <UserManagement />
      </section>
      <FooterAdmin />
    </>
  );
}
