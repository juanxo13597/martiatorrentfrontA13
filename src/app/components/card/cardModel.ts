export class cardModel {
  constructor(
    public id: number,
    public titulo: string,
    public descripcion: string,
    public imagen: string,
    public url: string,
    public created_at: string,
    public updated_at: string
  ) {}
}

export class carPaginateModel {
  constructor(
    public current_page: number,
    public data: cardModel[],
    public first_page_url: string,
    public from: number,
    public last_page: number,
    public last_page_url: string,
    public next_page_url: string,
    public path: string,
    public per_page: number,
    public prev_page_url: string,
    public to: number,
    public total: number
  ) {}
}
