function SkillsProgressBar({ label, value, color }) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <span className="uppercase">{label} </span>
        <span className="">{value}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-2xl h-4">
        <div
          className={`${color} h-4 rounded-full`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillsProgressBar;
