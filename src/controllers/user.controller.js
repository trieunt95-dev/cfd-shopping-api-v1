import { User } from "@src/models";

const userController = {};

userController.createUser = async (req, res) => {
    try {
        let newUser = { ...req.body };
        newUser.username = newUser.email.split("@")[0];
        await User.create({ ...newUser });

        res.status(201).json({
            success: true,
            data: newUser,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
    }
};

userController.getUser = async (req, res) => {
    let { id } = req.params;
    try {
        if (id) {
            let user = await User.findByPk(id);
            res.status(200).json({
                success: true,
                data: user,
            });
        } else {
            let userList = await User.findAll();
            res.status(200).json({
                success: true,
                data: userList,
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
    }
};

userController.updateUser = async (req, res) => {
    let { id } = req.params;
    try {
        await User.update(req.body, {
            where: {
                id,
            },
        });

        let user = await User.findByPk(id);

        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
    }
};

userController.deleteUser = async (req, res) => {
    let { id } = req.params;
    try {
        await User.destroy({
            where: {
                id,
            },
        });

        res.status(200).json({
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
    }
};

export default userController;
