import axios from '../../utils/axios';

export interface Picture {
  picture_dir: string;
  total_score: number;
  create_by: number;
  create_time: number;
  r18: boolean;
  scores: Score[];
  tags: Tag[]
}

interface Score {
  score_id: number;
  score: number;
  create_by: number;
}

interface Tag {
  tag_id: number;
  tag: string;
  create_by: number;
}

export const getPicture = (pid: number): any => axios(`api/picture?pid=${pid}`);