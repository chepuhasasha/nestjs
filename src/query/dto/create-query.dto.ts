export class CreateQueryDTO {
  title: string;
  url: string;
  method: string;
  body: string;
  params: {
    name: string;
    value: string;
  }[];
  headers: {
    name: string;
    value: string;
  }[];
  doc: string;
  project_id: string;
}
