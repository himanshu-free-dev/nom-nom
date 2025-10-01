import type { NextFunction, Request, Response } from 'express';
import { body, query, validationResult } from 'express-validator';

const handleValidationErrors = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
};

export const validateMyUserRequest = [
    body('name').isString().notEmpty().withMessage('name is mandatory'),
    body('addressLine1')
        .isString()
        .notEmpty()
        .withMessage('address is mandatory'),
    body('city').isString().notEmpty().withMessage('city is mandatory'),
    body('country').isString().notEmpty().withMessage('country is mandatory'),
    handleValidationErrors,
];
