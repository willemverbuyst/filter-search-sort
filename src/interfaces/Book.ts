export interface Book {
  _id: string;
  title: string;
  author: string;
  pages: number;
  inPrint: boolean;
  translated: boolean;
  createdAt: Date;
}
