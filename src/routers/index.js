import userRouter from "./user.router";

const configRouters = (app) => {
    app.get("/", (req, res) => {
        res.status(200).json({
            success: true,
            message: "CFD Shopping API v1",
        });
    });

    app.use("/api/v1/users", userRouter);
};

export default configRouters;
