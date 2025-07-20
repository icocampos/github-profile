import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useRepoStore } from "../store/useRepoStore";
import { ChevronDown } from "lucide-react";

const selectOptions = {
  type: ["All", "Sources", "Forks", "Archived", "Mirrors"],
  language: ["All", "Java", "TypeScript", "HTML", "CSS"],
};

const customTriggerClass =
  "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full px-4 py-2 flex items-center gap-2 w-[130px] justify-center shadow-sm";

export const RepoSelects = () => {
  const { language, setLanguage, type, setType } = useRepoStore();

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <Select value={type} onValueChange={setType}>
        <SelectTrigger className={customTriggerClass}>
          <ChevronDown size={16} />
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          {selectOptions.type.map((opt) => (
            <SelectItem key={opt} value={opt}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={language} onValueChange={setLanguage}>
        <SelectTrigger className={customTriggerClass}>
          <ChevronDown size={16} />
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          {selectOptions.language.map((lang) => (
            <SelectItem key={lang} value={lang}>
              {lang}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
