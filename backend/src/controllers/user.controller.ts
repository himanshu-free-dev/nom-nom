import type { Request, Response } from 'express';
import User from '../models/user.model.js';

const createCurrentUser = async (req: Request, res: Response) => {
    // check if the user exists
    try {
        const { auth0Id } = req.body;
        const existingUser = await User.findOne({ auth0Id });

        if (existingUser) {
            return res.status(200).json({ message: 'user already exists' });
        }

        // create user if it doesn't exists
        const newUser = new User(req.body);
        await newUser.save();

        // return user
        res.status(201).json({
            message: 'user created successfully',
            user: newUser.toObject(),
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: '!Error while creating the user' });
    }
};

export default { createCurrentUser };
