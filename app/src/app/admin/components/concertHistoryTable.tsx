import { ConcertTable } from "@/components";
import { map } from "lodash";

function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

function formatDate(date: Date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-") +
    " " +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(":")
  );
}

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
      datetime: formatDate(new Date(item.createdAt)),
      username: item.fullname,
      concertName: item.concertName,
      action: item.action,
    };
  });

  return <ConcertTable columns={columns} dataSource={dataSource} />;
}
