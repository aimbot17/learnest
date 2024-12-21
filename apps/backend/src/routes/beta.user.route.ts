import { Router } from 'express';
import BetaAccessController from '../controller/beta.access.controller';

const router = Router();

router.post('/', BetaAccessController.createBetaAccess);

router.get('/:email', BetaAccessController.getBetaAccessStatus);

router.patch('/update/:email', BetaAccessController.updateBetaAccess);

router.delete('/delete/:email', BetaAccessController.deleteBetaAccess);

export default router;
