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
        res.status(500).json({
            success: true,
            message: '!Error while creating the user',
        });
    }
};

const updateCurrentUser = async (req: Request, res: Response) => {
    try {
        // find user with auth0id in db
        const { name, addressLine1, country, city } = req.body;
        let user = await User.findById(req.userId);

        // update db if user is found
        if (!user) {
            return res
                .status(404)
                .json({ status: false, message: 'User not found' });
        }

        user.name = name;
        user.addressLine1 = addressLine1;
        user.country = country;
        user.city = city;

        await user.save();
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Couldn't update the user. Internal server error",
        });
    }
};

export default { createCurrentUser, updateCurrentUser };
