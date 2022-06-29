export interface Producto{
    id?:string;
    title?:string;
    plain_text?:string
    pictures?:[
        {
            id?:string;
            url?:string;
            size?:number;
            
        }
    ];
    price?: number;
    thumbnail?: string;
    available_quantity?: number;
    attributes?:[
        {
            [k:string]:string | number
        }
    ]
}

export interface ResponseProducto{
    site_id:string;
    query?:string;
    results:Producto[]
}