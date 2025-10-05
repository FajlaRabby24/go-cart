import Navbar from "@/components/Navbar";
import { ChildrenProps } from "@/types/children";

export default function PublicLayout({ children }: ChildrenProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
