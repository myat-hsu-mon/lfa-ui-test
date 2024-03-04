import {
  CheckCircleIcon,
  MapPinIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";

const data = [
  {
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Kuppuraj",
    city: "Coimbatore",
    date: "03-09-2023",
    status: "Delivered",
    price: "$18,999",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Dinesh",
    city: "Chennai",
    date: "03-09-2023",
    status: "Canceled",
    price: "$2200",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Logu",
    city: "Bangalore",
    date: "03-09-2023",
    status: "Delivered",
    price: "$24,432",
  },
];

export default function RecentOrders() {
  return (
    <div className="card">
      <div className="mb-3 flex items-center justify-between">
        <h2>Recent Orders</h2>
        <span className="text-sm text-blue-500">See All</span>
      </div>
      <table className="w-full bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-sm">Profile</th>
            <th className="px-4 py-2 text-sm">City</th>
            <th className="px-4 py-2 text-sm">Date</th>
            <th className="px-4 py-2 text-sm">Status</th>
            <th className="px-4 py-2 text-sm">Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="flex items-center px-4 py-1 text-sm">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="mr-2 h-6 w-6 rounded-full"
                />
                <span>{item.name}</span>
              </td>
              <td className="px-4 py-1 text-sm">
                <div className="flex items-center space-x-1">
                  <MapPinIcon className="h-4 w-4 text-red-dark" />
                  <span>{item.city}</span>
                </div>
              </td>
              <td className="px-4 py-1 text-sm">{item.date}</td>
              <td className="px-4 py-1 text-sm">
                <div className="flex items-center space-x-1">
                  {item.status === "Delivered" ? (
                    <CheckCircleIcon className="h-4 w-4 text-green-dark" />
                  ) : (
                    <XCircleIcon className="h-4 w-4 text-red-dark" />
                  )}

                  <span>{item.status}</span>
                </div>
              </td>
              <td className="px-4 py-1 text-sm">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
