import {
  ChartBarSquareIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import SaleCard from "./SaleCard";

export type SaleCardProp = {
  icon: any;
  amount: string;
  title: string;
  changeAmountFromYesterday: number;
  bgDarkColor: string;
  bgLightColor: string;
};

const saleCards: SaleCardProp[] = [
  {
    icon: ChartBarSquareIcon,
    amount: "₹ 37,446",
    title: "Total Sales",
    changeAmountFromYesterday: 18,
    bgDarkColor: "bg-red-dark",
    bgLightColor: "bg-red-light",
  },
  {
    icon: DocumentTextIcon,
    amount: "365",
    title: "Total Orders",
    changeAmountFromYesterday: -27,
    bgDarkColor: "bg-green-dark",
    bgLightColor: "bg-green-light",
  },
  {
    icon: UserIcon,
    amount: "36",
    title: "New Customers",
    changeAmountFromYesterday: 8,
    bgDarkColor: "bg-purple-dark",
    bgLightColor: "bg-purple-light",
  },
  {
    icon: CurrencyDollarIcon,
    amount: "₹ 16,285",
    title: "Total Earnings",
    changeAmountFromYesterday: 23,
    bgDarkColor: "bg-orange-dark",
    bgLightColor: "bg-orange-light",
  },
];

export default function SaleCardList() {
  return (
    <div className="grid grid-cols-4 gap-4 lg:gap-8">
      {saleCards.map((sale) => (
        <SaleCard sale={sale} key={sale.title} />
      ))}
    </div>
  );
}
