const express = require('express');

const ctrl = require('../../controllers/monuments');

const { validateBody, isValidId, authenticate } = require('../../middlewares');

const { schemas } = require('../../models/monument');

const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:id', authenticate, isValidId, ctrl.getById);

router.post('/', authenticate, validateBody(schemas.addSchema), ctrl.add);
router.put(
  '/:id',
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

router.patch(
  '/:id/favorite',
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchemas),
  ctrl.updateFavorite
);

router.delete('/:id', authenticate, isValidId, ctrl.deleteById);

module.exports = router;
