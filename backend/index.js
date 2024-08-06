import express from 'express';
import { mongoDBURL, PORT } from "./config.js";
import mongoose from 'mongoose';

const app = express();

app.get("/", (request, response) => {
    return response.status(234).send('Welcome to MERN Stack Tutorial');
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB...');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });