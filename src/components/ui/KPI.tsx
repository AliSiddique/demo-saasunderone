// 'use client';
import { Card } from "@tremor/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const data = [
  {
    name: "Unique visitors",
    stat: "10,450",
    change: "-12.5%",
    changeType: "negative",
  },
  {
    name: "Bounce rate",
    stat: "56.1%",
    change: "+1.8%",
    changeType: "positive",
  },
  {
    name: "Visit duration",
    stat: "5.2min",
    change: "+19.7%",
    changeType: "positive",
  },
];

export default function KPICards() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-5">
        {data.map((item) => (
          <Card key={item.name} className="rounded-lg border-gray-400">
            <p className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
              {item.name}
            </p>
            <div className="mt-2 flex items-baseline space-x-2.5">
              <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.stat}
              </p>
              <span
                className={classNames(
                  item.changeType === "positive"
                    ? "text-emerald-700 dark:text-emerald-500"
                    : "text-red-700 dark:text-red-500",
                  "text-tremor-default font-medium",
                )}
              >
                {item.change}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
