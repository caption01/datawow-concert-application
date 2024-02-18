import { map } from "lodash";

const defaultCols = [
  {
    key: "datetime",
    dataIndex: "datetime",
    title: "Date time",
  },
  {
    key: "username",
    dataIndex: "username",
    title: "Username",
  },
  {
    key: "concertName",
    dataIndex: "concertName",
    title: "ConcertName",
  },
  {
    key: "action",
    dataIndex: "action",
    title: "Action",
  },
];

const mockDataSource = [
  {
    key: "1",
    datetime: new Date().toDateString(),
    username: "mock user",
    concertName: "Illslick",
    action: "RESERVE",
  },
  {
    key: "2",
    datetime: new Date().toDateString(),
    username: "mock user",
    concertName: "Illslick",
    action: "RESERVE",
  },
  {
    key: "3",
    datetime: new Date().toDateString(),
    username: "mock user",
    concertName: "Illslick",
    action: "RESERVE",
  },
  {
    key: "4",
    datetime: new Date().toDateString(),
    username: "mock user",
    concertName: "Illslick",
    action: "RESERVE",
  },
];

export function ConcertTable({
  columns = defaultCols,
  dataSource = mockDataSource,
}) {
  const dataIndex = map(columns, (col) => col.dataIndex);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left bg-white">
        <thead>
          <tr>
            {map(columns, (col) => {
              return (
                <th key={col.key} scope="col" className="px-6 py-3 border-2">
                  {col.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {map(dataSource, (data: any, index: number) => {
            return (
              <tr key={`row-${index}`}>
                {map(dataIndex, (dIdx, index: number) => {
                  return (
                    <td
                      key={`col-${index}-${data?.key}`}
                      scope="row"
                      className="px-6 py-4 border-2"
                    >
                      {data[dIdx]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
