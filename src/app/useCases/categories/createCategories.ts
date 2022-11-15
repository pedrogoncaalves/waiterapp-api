import { Request, Response} from 'express';

import { Category } from '../../models/Categorys';


export async function createCategory(req: Request, res: Response) {
    try {
        const {icon, name} = req.body;

        const category = await Category.create({ icon, name  });

        res.json(category);
    }
    catch (error){
        console.log(error);
        res.sendStatus(500);
    }

}
