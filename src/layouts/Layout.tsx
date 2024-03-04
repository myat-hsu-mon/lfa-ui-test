import { ReactNode, useState } from "react";
import Navigation from "./Navigation";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-200 p-4 font-sans text-gray-800">
      <Navigation sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="space-y-4 lg:flex lg:flex-col lg:pl-72">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1">
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
}
