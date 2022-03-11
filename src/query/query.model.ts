export class QueryModel {
  id: string;
  title: string;
  url: string;
  method: string;
  params: {
    [key: string]: string;
  };
  headers: {
    [key: string]: string;
  };
  body: {
    [key: string]: string;
  };
  doc: string;
}
