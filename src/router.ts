// Features
import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategories';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import multer from 'multer';
import path from 'node:path';
import { listProductsByCategories } from './app/useCases/categories/listProductsByCategories';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';

export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, '..', 'uploads') );
        },
        filename(req, file, callback) {
            callback(null,`${Date.now()}-${file.originalname}` );
        }
    })

});



// List Categories

router.get('/categories', listCategories);

// Create Categories
router.post('/categories', createCategory);

// List Products
router.get('/products', listProducts);

// Create Product
router.post('/products', upload.single('image'),createProduct);

// get products by categories
router.get('/categories/:categoryId/products', listProductsByCategories);

// List Order

router.get('/orders', listOrders);

// Create Order
router.post('/orders', createOrder);
// Change order status
router.patch('/orders/:orderId', (req, res) => {
    res.send('OK');
});

// Delete order

router.delete('/orders/:orderId', (req, res) => {
    res.send('OK');
});

