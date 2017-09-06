export interface INews {
  status: string;
  source: string;
  sortBy: string;
  articles: Array<any>;
}

export class News {
  status: string;
  source: string;
  sortBy: string;
  articles: Array<any>;
}