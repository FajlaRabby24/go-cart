import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ChildrenProps } from "@/types/children.types";

export default function PublicLayout({ children }: ChildrenProps) {
  return (
    <>
      <Banner />
      <Navbar />
      <main className="min-h-[calc(100vh-420px)]">{children}</main>
      <Footer />
    </>
  );
}
