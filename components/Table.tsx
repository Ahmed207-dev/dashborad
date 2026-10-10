import { ReactNode } from "react";

const Table = <T,>({
  columns,
  RenderRow,
  Data,
}: {
  columns: {
    header: string;
    accessor: string;
    className?: string;
  }[];
  RenderRow: (item: T) => ReactNode;
  Data: T[];
}) => {
  return (
    <table className="w-full mt-4 text-left border-collapse">
      <thead>
        <tr className="text-gray-400 text-xs font-semibold uppercase tracking-wider border-b border-gray-100">
          {columns?.map((col, i) => (
            <th
              key={col.accessor || i}
              className={`pb-3 px-2 ${col.className || ""}`}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-gray-100">
        {Data?.map((item) => RenderRow(item))}
      </tbody>
    </table>
  );
};

export default Table;
