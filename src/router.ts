// Features
import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategories';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import multer from 'multer';
import path from 'node:path';

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
router.get('/categories/:categoryId/products', (req,res) => {
    res.send('OK');
});

// List Order

router.get('/orders', (req, res) => {
    res.send('OK');
});

// Create Order
router.post('/orders', (req, res) => {
    res.send('OK');
});

// Change order status
router.patch('/orders/:orderId', (req, res) => {
    res.send('OK');
});

// Delete order

router.delete('/orders/:orderId', (req, res) => {
    res.send('OK');
});

