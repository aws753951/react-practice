import classNames from "classnames";

// className : 接受其他class作為不同框大小的設計
const Skeleton = ({ times, className }) => {
  const outerClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    className
  );

  const innerClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0", // expand to outer div
    "-translate-x-full", // 一開始放置在最左邊，搭配translateX(+100%)
    "bg-gradient-to-l", // 顏色 left: 為from的bg
    "from-gray-200",
    "via-white",
    "to-gray-200"
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassNames}>
          <div className={innerClassNames} />
        </div>
      );
    });
  return <div>{boxes}</div>;
};

export default Skeleton;
