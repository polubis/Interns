export class Beer {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public brewery: string,
    public pictureUrl?: string,
    public rate?: number
  ) {}
}
