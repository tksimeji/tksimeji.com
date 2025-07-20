import { ListFilter } from 'lucide-react';
import { ChangeEventHandler } from 'react';

const SkillSearchBox = (props: SkillSearchBoxProps) => {
  return (
    <div className="bg-surface flex items-center mx-auto px-4 py-2 rounded-2xl">
      <ListFilter className="mr-2" />
      <input className="outline-0 w-full" onChange={props.onChange} placeholder="ここに入力して検索" type="text"/>
    </div>
  );
};

interface SkillSearchBoxProps {
  onChange: ChangeEventHandler;
}

export default SkillSearchBox;