import IFilter from "../interfaces/IFilter";

function FilterButton({ filter, appliedFilter, title, updateFilter }: IFilter) {
  return (
    <button
      className={`hover:opacity-90 ${
        filter === appliedFilter ? "opacity-100" : "opacity-60"
      }`}
      onClick={() => updateFilter(filter)}
    >
      {title}
    </button>
  );
}

export default FilterButton;
