import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import SaleCardList from "./SaleCardList";

export default function TodaySales() {
  return (
    <div className="card flex flex-col" data-testid="sale-card-list">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <h2>Today's Sales</h2>
          <h6>Sales Summary</h6>
        </div>
        <div className="flex items-center space-x-1">
          <CalendarDaysIcon
            className="h-6 w-6 shrink-0 text-blue-600"
            aria-hidden="true"
            data-testid="calendar-days-icon"
          />
          <span className="text-gray-600">Tue, 05-09-2023</span>
        </div>
      </div>
      <SaleCardList />
    </div>
  );
}
