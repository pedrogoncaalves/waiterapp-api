// Features
import { Router } from 'express';

export const router = Router();

// List Categories

router.get('/categories', (req,res) => {
    res.send('OK');
});

// Create Categories
router.post('/categories', (req,res) => {
    res.send('OK');
});

// List Products
router.get('products', (req,res) => {
    res.send('OK');
});

// Create Product
router.post('/products', (req,res) => {
    res.send('OK');
});

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

