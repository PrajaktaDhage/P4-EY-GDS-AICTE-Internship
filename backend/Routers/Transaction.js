import express from 'express';
import { addTransactionController, deleteTransactionController, getAllTransactionController, updateTransactionController } from '../controllers/transactionController.js';
import { authenticate } from '../middleware/authenticate.js';

const router = express.Router();

router.route("/addTransaction").post(authenticate, addTransactionController);
router.route("/getTransaction").post(authenticate, getAllTransactionController);
router.route("/deleteTransaction/:id").post(authenticate, deleteTransactionController);
router.route('/updateTransaction/:id').put(authenticate, updateTransactionController);

export default router;