// 'use client';
import {
  LineChart,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const data = [
  {
    date: "Aug 01",
    "ETF Shares Vital": 2100.2,
    "Vitainvest Core": 4434.1,
    "iShares Tech Growth": 7943.2,
  },
  {
    date: "Aug 02",
    "ETF Shares Vital": 2943.0,
    "Vitainvest Core": 4954.1,
    "iShares Tech Growth": 8954.1,
  },
  {
    date: "Aug 03",
    "ETF Shares Vital": 4889.5,
    "Vitainvest Core": 6100.2,
    "iShares Tech Growth": 9123.7,
  },
  {
    date: "Aug 04",
    "ETF Shares Vital": 3909.8,
    "Vitainvest Core": 4909.7,
    "iShares Tech Growth": 7478.4,
  },
  {
    date: "Aug 05",
    "ETF Shares Vital": 5778.7,
    "Vitainvest Core": 7103.1,
    "iShares Tech Growth": 9504.3,
  },
  {
    date: "Aug 06",
    "ETF Shares Vital": 5900.9,
    "Vitainvest Core": 7534.3,
    "iShares Tech Growth": 9943.4,
  },
  {
    date: "Aug 07",
    "ETF Shares Vital": 4129.4,
    "Vitainvest Core": 7412.1,
    "iShares Tech Growth": 10112.2,
  },
  {
    date: "Aug 08",
    "ETF Shares Vital": 6021.2,
    "Vitainvest Core": 7834.4,
    "iShares Tech Growth": 10290.2,
  },
  {
    date: "Aug 09",
    "ETF Shares Vital": 6279.8,
    "Vitainvest Core": 8159.1,
    "iShares Tech Growth": 10349.6,
  },
  {
    date: "Aug 10",
    "ETF Shares Vital": 6224.5,
    "Vitainvest Core": 8260.6,
    "iShares Tech Growth": 10415.4,
  },
  {
    date: "Aug 11",
    "ETF Shares Vital": 6380.6,
    "Vitainvest Core": 8965.3,
    "iShares Tech Growth": 10636.3,
  },
  {
    date: "Aug 12",
    "ETF Shares Vital": 6414.4,
    "Vitainvest Core": 7989.3,
    "iShares Tech Growth": 10900.5,
  },
  {
    date: "Aug 13",
    "ETF Shares Vital": 6540.1,
    "Vitainvest Core": 7839.6,
    "iShares Tech Growth": 11040.4,
  },
  {
    date: "Aug 14",
    "ETF Shares Vital": 6634.4,
    "Vitainvest Core": 7343.8,
    "iShares Tech Growth": 11390.5,
  },
  {
    date: "Aug 15",
    "ETF Shares Vital": 7124.6,
    "Vitainvest Core": 6903.7,
    "iShares Tech Growth": 11423.1,
  },
  {
    date: "Aug 16",
    "ETF Shares Vital": 7934.5,
    "Vitainvest Core": 6273.6,
    "iShares Tech Growth": 12134.4,
  },
  {
    date: "Aug 17",
    "ETF Shares Vital": 10287.8,
    "Vitainvest Core": 5900.3,
    "iShares Tech Growth": 12034.4,
  },
  {
    date: "Aug 18",
    "ETF Shares Vital": 10323.2,
    "Vitainvest Core": 5732.1,
    "iShares Tech Growth": 11011.7,
  },
  {
    date: "Aug 19",
    "ETF Shares Vital": 10511.4,
    "Vitainvest Core": 5523.1,
    "iShares Tech Growth": 11834.8,
  },
  {
    date: "Aug 20",
    "ETF Shares Vital": 11043.9,
    "Vitainvest Core": 5422.3,
    "iShares Tech Growth": 12387.1,
  },
  {
    date: "Aug 21",
    "ETF Shares Vital": 6700.7,
    "Vitainvest Core": 5334.2,
    "iShares Tech Growth": 11032.2,
  },
  {
    date: "Aug 22",
    "ETF Shares Vital": 6900.8,
    "Vitainvest Core": 4943.4,
    "iShares Tech Growth": 10134.2,
  },
  {
    date: "Aug 23",
    "ETF Shares Vital": 7934.5,
    "Vitainvest Core": 4812.1,
    "iShares Tech Growth": 9921.2,
  },
  {
    date: "Aug 24",
    "ETF Shares Vital": 9021.0,
    "Vitainvest Core": 2729.1,
    "iShares Tech Growth": 10549.8,
  },
  {
    date: "Aug 25",
    "ETF Shares Vital": 9198.2,
    "Vitainvest Core": 2178.0,
    "iShares Tech Growth": 10968.4,
  },
  {
    date: "Aug 26",
    "ETF Shares Vital": 9557.1,
    "Vitainvest Core": 2158.3,
    "iShares Tech Growth": 11059.1,
  },
  {
    date: "Aug 27",
    "ETF Shares Vital": 9959.8,
    "Vitainvest Core": 2100.8,
    "iShares Tech Growth": 11903.6,
  },
  {
    date: "Aug 28",
    "ETF Shares Vital": 10034.6,
    "Vitainvest Core": 2934.4,
    "iShares Tech Growth": 12143.3,
  },
  {
    date: "Aug 29",
    "ETF Shares Vital": 10243.8,
    "Vitainvest Core": 3223.4,
    "iShares Tech Growth": 12930.1,
  },
  {
    date: "Aug 30",
    "ETF Shares Vital": 10078.5,
    "Vitainvest Core": 3779.1,
    "iShares Tech Growth": 13420.5,
  },
  {
    date: "Aug 31",
    "ETF Shares Vital": 11134.6,
    "Vitainvest Core": 4190.3,
    "iShares Tech Growth": 14443.2,
  },
  {
    date: "Sep 01",
    "ETF Shares Vital": 12347.2,
    "Vitainvest Core": 4839.1,
    "iShares Tech Growth": 14532.1,
  },
  {
    date: "Sep 02",
    "ETF Shares Vital": 12593.8,
    "Vitainvest Core": 5153.3,
    "iShares Tech Growth": 14283.5,
  },
  {
    date: "Sep 03",
    "ETF Shares Vital": 12043.4,
    "Vitainvest Core": 5234.8,
    "iShares Tech Growth": 14078.9,
  },
  {
    date: "Sep 04",
    "ETF Shares Vital": 12144.9,
    "Vitainvest Core": 5478.4,
    "iShares Tech Growth": 13859.7,
  },
  {
    date: "Sep 05",
    "ETF Shares Vital": 12489.5,
    "Vitainvest Core": 5741.1,
    "iShares Tech Growth": 13539.2,
  },
  {
    date: "Sep 06",
    "ETF Shares Vital": 12748.7,
    "Vitainvest Core": 6743.9,
    "iShares Tech Growth": 13643.2,
  },
  {
    date: "Sep 07",
    "ETF Shares Vital": 12933.2,
    "Vitainvest Core": 7832.8,
    "iShares Tech Growth": 14629.2,
  },
  {
    date: "Sep 08",
    "ETF Shares Vital": 13028.8,
    "Vitainvest Core": 8943.2,
    "iShares Tech Growth": 13611.2,
  },
  {
    date: "Sep 09",
    "ETF Shares Vital": 13412.4,
    "Vitainvest Core": 9932.2,
    "iShares Tech Growth": 12515.2,
  },
  {
    date: "Sep 10",
    "ETF Shares Vital": 13649.0,
    "Vitainvest Core": 10139.2,
    "iShares Tech Growth": 11143.8,
  },
  {
    date: "Sep 11",
    "ETF Shares Vital": 13748.5,
    "Vitainvest Core": 10441.2,
    "iShares Tech Growth": 8929.2,
  },
  {
    date: "Sep 12",
    "ETF Shares Vital": 13148.1,
    "Vitainvest Core": 10933.8,
    "iShares Tech Growth": 8943.2,
  },
  {
    date: "Sep 13",
    "ETF Shares Vital": 12839.6,
    "Vitainvest Core": 11073.4,
    "iShares Tech Growth": 7938.3,
  },
  {
    date: "Sep 14",
    "ETF Shares Vital": 12428.2,
    "Vitainvest Core": 11128.3,
    "iShares Tech Growth": 7533.4,
  },
  {
    date: "Sep 15",
    "ETF Shares Vital": 12012.8,
    "Vitainvest Core": 11412.3,
    "iShares Tech Growth": 7100.4,
  },
  {
    date: "Sep 16",
    "ETF Shares Vital": 11801.3,
    "Vitainvest Core": 10501.1,
    "iShares Tech Growth": 6532.1,
  },
  {
    date: "Sep 17",
    "ETF Shares Vital": 10102.9,
    "Vitainvest Core": 8923.3,
    "iShares Tech Growth": 4332.8,
  },
  {
    date: "Sep 18",
    "ETF Shares Vital": 12132.5,
    "Vitainvest Core": 10212.1,
    "iShares Tech Growth": 7847.4,
  },
  {
    date: "Sep 19",
    "ETF Shares Vital": 12901.1,
    "Vitainvest Core": 10101.7,
    "iShares Tech Growth": 7223.3,
  },
  {
    date: "Sep 20",
    "ETF Shares Vital": 13132.6,
    "Vitainvest Core": 12132.3,
    "iShares Tech Growth": 6900.2,
  },
  {
    date: "Sep 21",
    "ETF Shares Vital": 14132.2,
    "Vitainvest Core": 13212.5,
    "iShares Tech Growth": 5932.2,
  },
  {
    date: "Sep 22",
    "ETF Shares Vital": 14245.8,
    "Vitainvest Core": 12163.4,
    "iShares Tech Growth": 5577.1,
  },
  {
    date: "Sep 23",
    "ETF Shares Vital": 14328.3,
    "Vitainvest Core": 10036.1,
    "iShares Tech Growth": 5439.2,
  },
  {
    date: "Sep 24",
    "ETF Shares Vital": 14949.9,
    "Vitainvest Core": 8985.1,
    "iShares Tech Growth": 4463.1,
  },
  {
    date: "Sep 25",
    "ETF Shares Vital": 15967.5,
    "Vitainvest Core": 9700.1,
    "iShares Tech Growth": 4123.2,
  },
  {
    date: "Sep 26",
    "ETF Shares Vital": 17349.3,
    "Vitainvest Core": 10943.4,
    "iShares Tech Growth": 3935.1,
  },
];

const summary = [
  {
    name: "ETF Shares Vital",
    value: "$21,349.36",
    invested: "$19,698.65",
    cashflow: "$14,033.74",
    gain: "+$11,012.39",
    realized: "+$177.48",
    dividends: "+$490.97",
    bgColor: "bg-blue-500",
    changeType: "positive",
  },
  {
    name: "Vitainvest Core",
    value: "$25,943.43",
    invested: "$23,698.65",
    cashflow: "$11,033.74",
    gain: "+$3,012.39",
    realized: "+$565.41",
    dividends: "+$290.97",
    bgColor: "bg-violet-500",
    changeType: "positive",
  },
  {
    name: "iShares Tech Growth",
    value: "$9,443.46",
    invested: "$14,698.65",
    cashflow: "$2,033.74",
    gain: "-$5,012.39",
    realized: "-$634.42",
    dividends: "-$990.97",
    bgColor: "bg-fuchsia-500",
    changeType: "negative",
  },
];

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

export default function DashboardChart() {
  return (
    <>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Portfolio performance
      </h3>
      <p className="mt-1 text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        $32,227.40
      </p>
      <p className="mt-1 text-tremor-default font-medium">
        <span className="text-emerald-700 dark:text-emerald-500">
          +$430.90 (4.1%)
        </span>{" "}
        <span className="font-normal text-tremor-content dark:text-dark-tremor-content">
          Past 24 hours
        </span>
      </p>
      <LineChart
        data={data}
        index="date"
        categories={[
          "ETF Shares Vital",
          "Vitainvest Core",
          "iShares Tech Growth",
        ]}
        colors={["blue", "violet", "fuchsia"]}
        valueFormatter={valueFormatter}
        yAxisWidth={55}
        onValueChange={() => {}}
        className="mt-6 hidden h-96 sm:block"
      />
      <LineChart
        data={data}
        index="date"
        categories={[
          "ETF Shares Vital",
          "Vitainvest Core",
          "iShares Tech Growth",
        ]}
        colors={["blue", "violet", "fuchsia"]}
        valueFormatter={valueFormatter}
        showYAxis={false}
        showLegend={false}
        startEndOnly={true}
        className="mt-6 h-72 sm:hidden"
      />
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Name
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Value
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Invested
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Cashflow
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Gain
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Realized
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Dividends
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {summary.map((item) => (
            <TableRow key={item.name}>
              <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                <div className="flex space-x-3">
                  <span
                    className={classNames(item.bgColor, "w-1 shrink-0 rounded")}
                    aria-hidden={true}
                  />
                  <span>{item.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">{item.value}</TableCell>
              <TableCell className="text-right">{item.invested}</TableCell>
              <TableCell className="text-right">{item.cashflow}</TableCell>
              <TableCell className="text-right">
                <span
                  className={classNames(
                    item.changeType === "positive"
                      ? "text-emerald-700 dark:text-emerald-500"
                      : "text-red-700 dark:text-red-500",
                  )}
                >
                  {item.gain}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <span
                  className={classNames(
                    item.changeType === "positive"
                      ? "text-emerald-700 dark:text-emerald-500"
                      : "text-red-700 dark:text-red-500",
                  )}
                >
                  {item.realized}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <span
                  className={classNames(
                    item.changeType === "positive"
                      ? "text-emerald-700 dark:text-emerald-500"
                      : "text-red-700 dark:text-red-500",
                  )}
                >
                  {item.dividends}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
