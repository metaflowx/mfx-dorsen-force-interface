
import Footer from "@/components/footer/footer";
import Header from "@/components/header/Header";
import Banner from "@/components/home/Banner";
import Aboutdorsen from "@/components/home/aboutdorsen";
import Whydorsen from "@/components/home/whydorsen";
import Community from "@/components/home/community";
import Leadership from "@/components/home/leadership";
import Qualification from "@/components/home/qualification";
import Futurecard from "@/components/home/futurecard";
import Faqs from "@/components/home/faqs";



export default function Home() {
  return (

    <>
      <Header />
      <div id="home"><Banner /></div>
      <div id="about"><Aboutdorsen /></div>
      <div id="compensation"><Leadership /></div>
      <div id="whydorsen"><Whydorsen /></div>
      <div id="qualifications"><Qualification /></div>
      <div id="tokenomics"><Futurecard /></div>
      <div id="faqs"><Faqs /></div>
      <div id="contact"><Community /></div>
      <Footer />
    </>
  );
}