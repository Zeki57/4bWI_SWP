export class Car {
    constructor(private model: string, private color: string) {

    }

    getColor(): string {
        let color: string = "weiß"
        console.log(color)
        return this.color
    }
}