export default function ProgressBar({
  label,
  percent,
}: {
  label: string;
  percent: number;
}) {
  return (
    <div>
      <div className="flex justify-between text-sm text-gray-300">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>

      <div className="w-full bg-gray-800 h-2 rounded-full mt-1">
        <div
          className="bg-yellow-500 h-2 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
