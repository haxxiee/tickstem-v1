import Link from "next/link";
import { FC } from "react";
import { TicketObject } from "../types/ticket";

interface Props {
  ticket: TicketObject;
}

const TicketItem: FC<Props> = ({ ticket }) => {
  return (
    // <div className="flex justify-between items-center w-3/4">
    //   <div>{new Date(ticket.createdAt).toLocaleString("en-US")}</div>
    //   <div>{ticket.product}</div>
    //   <div>{ticket.status}</div>
    //   <Link href={`/dashboard/tickets/${ticket.id}`}>View</Link>
    // </div>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {new Date(ticket.createdAt).toLocaleString("en-US")}
      </th>
      <td className="py-4 px-6">{ticket.product}</td>
      <td
        className={`py-4 px-6 font-semibold ${
          ticket.status === "NEW" ? "text-green-600" : "text-red-600"
        }`}
      >
        {ticket.status}
      </td>
      <td className="py-4 px-6 font-bold">
        <Link href={`/dashboard/tickets/${ticket.id}`}>View</Link>
      </td>
    </tr>
  );
};

export default TicketItem;
