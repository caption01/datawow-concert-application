import { ConcertTable } from "@/components";
import { map } from "lodash";

export function ConcertHistoryTable({ history }: { history: any[] }) {
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

  const dataSource = map(history, (item) => {
    return {
      key: item.id,
      datetime: item.createdAt,
      username: item.fullname,
      concertName: item.concertName,
      action: item.action,
    };
  });

  return <ConcertTable columns={columns} dataSource={dataSource} />;
}
