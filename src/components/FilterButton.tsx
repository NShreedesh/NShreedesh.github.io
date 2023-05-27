import { ProjectFilter } from "../enums/ProjectFilter";

interface IFilter {
  filter: ProjectFilter;
  appliedFilter: ProjectFilter;
  title: string;
  updateFilter: (filter: ProjectFilter) => void;
}

function FilterButton({ filter, appliedFilter, title, updateFilter }: IFilter) {
  return (
    <button
      className={`opacity-60 hover:opacity-100 ${
        filter === appliedFilter && "opacity-100"
      }`}
      onClick={() => updateFilter(filter)}
    >
      {title}
    </button>
  );
}

export default FilterButton;
