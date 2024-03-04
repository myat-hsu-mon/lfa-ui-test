import { ReactNode, useState } from "react";
import Navigation from "./Navigation";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-full font-sans text-gray-800">
      <Navigation sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="h-full space-y-4 lg:flex lg:flex-col lg:pl-72">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex flex-1 flex-col">{children}</main>
      </div>
    </div>
  );
}
