import { ConcertTable } from "@/components";

export function ConcertHistoryTable() {
  const columns = [
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

  const dataSource = [
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

  return <ConcertTable columns={columns} dataSource={dataSource} />;
}
