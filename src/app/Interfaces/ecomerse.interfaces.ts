export interface BrandInterfaces{
    id:number,
    brand:string
}

export interface DepartmentInterface {
    id:number,
    departament:string
}

export interface ProductInterface {
    id:number
    brand:number,
    departament:number,
    model:string,
    description:Array<string>,
    rating: number,
    price:number,
    msi:boolean,
    meses?:Array<number>,
    img:string
}