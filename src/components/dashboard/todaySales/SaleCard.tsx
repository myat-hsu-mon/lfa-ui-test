import classNames from "clsx";

import { SaleCardProp } from "./SaleCardList";

export default function SaleCard({
  sale: {
    title,
    amount,
    changeAmountFromYesterday,
    icon: Icon1,
    bgDarkColor,
    bgLightColor,
  },
}: {
  sale: SaleCardProp;
}) {
  return (
    <div className={classNames(`${bgLightColor} card px-6 py-3`)} data-testid="sale-card">
      <div className="flex items-center">
        <div className={classNames(bgDarkColor, "rounded-full p-2")}>
          <Icon1 className="h-7 w-7 shrink-0 text-white" aria-hidden="true" />
        </div>
        <h1 className="ml-auto text-3xl">{amount}</h1>
      </div>
      <h2 className="mb-1 text-right text-gray-600">{title}</h2>
      <div
        className={classNames(
          changeAmountFromYesterday > 0 ? "text-blue-500" : "text-red-dark",
          "text-right text-sm",
        )}
      >{`${changeAmountFromYesterday > 0 ? "+" : ""}${changeAmountFromYesterday}% from yesterday`}</div>
    </div>
  );
}
