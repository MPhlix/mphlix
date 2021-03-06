import { Option } from './Option';

export interface Question {
  id: number;
  title: string;
  options: Option[];
  multiSelection: boolean;
  nextQuestion: number;
  category: string;
}
