export class Videos{
    constructor(
        private id : string,
        private titulo : string,
        private duracaoSg : number,
        private createdAt : string
    ){}
    public getId(): string {
      return this.id  
    }
    public setId(newvalue:string): void {
        this.id = newvalue
        }

    public getTitulo(): string {
        return this.titulo
        }
    public setTitulo(newValue: string) {
         this.titulo = newValue
        }
    public getDuracaoSg(): number {
        return this.duracaoSg
        }
    public setDuracaoSg(newValue: number) {
         this.duracaoSg = newValue
        }
    public getCreatedAt(): string {
        return this.createdAt
        }
    public setCreatedAt(newValue: string) {
         this.createdAt = newValue
        }
}
