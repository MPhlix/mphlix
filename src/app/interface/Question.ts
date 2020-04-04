import { Option } from '../interface/Option';

export interface Question {
  id: number;
  title: string;
  options: Option[];
  multiSelection: boolean;
  nextQuestion: number;
}
