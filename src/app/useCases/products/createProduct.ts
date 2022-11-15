import { Request, Response} from 'express';

import { Product } from '../../models/Product';


export async function createProduct(req: Request, res: Response) {
    try {
        const imagePath = req.file?.filename;
        const {name, description, price, category, ingredients} = req.body;

        await Product.create({
            name,
            description,
            price: Number(price),
            category,

        });
        console.log(req.body);
    }
    catch (error){
        console.log(error);
        res.sendStatus(500);
    }

}
