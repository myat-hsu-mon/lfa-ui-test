import CustomerSatisfaction from "../components/dashboard/CustomerSatisfaction";
import ProductClass from "../components/dashboard/ProductClass";
import Profit from "../components/dashboard/Profit";
import RecentOrders from "../components/dashboard/RecentOrders";
import SaleTarget from "../components/dashboard/SaleTarget";
import Sales from "../components/dashboard/Sales";
import WeeklySales from "../components/dashboard/WeeklySales";
import TodaySales from "../components/dashboard/todaySales/TodaySales";

export default function Dashboard() {
  return (
    <div className="flex flex-1 flex-col space-y-4">
      <TodaySales />
      <div className="flex gap-x-4">
        <WeeklySales />
        <Sales />
        <Profit />
        <ProductClass />
      </div>
      <div className="flex flex-1 gap-x-4">
        <CustomerSatisfaction />
        <RecentOrders />
        <SaleTarget />
      </div>
    </div>
  );
}
