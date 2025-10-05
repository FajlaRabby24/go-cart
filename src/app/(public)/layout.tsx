import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import { ChildrenProps } from "@/types/children.types";

export default function PublicLayout({ children }: ChildrenProps) {
  return (
    <>
      <Banner />
      <Navbar />
      {children}
    </>
  );
}
