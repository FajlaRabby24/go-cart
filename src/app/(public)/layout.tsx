import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import { ChildrenProps } from "@/types/children";

export default function PublicLayout({ children }: ChildrenProps) {
  return (
    <>
      <Banner />
      <Navbar />
      {children}
    </>
  );
}
