// @ts-ignore
import Dotenv from 'dotenv-webpack';

module.exports = {
    plugins: [
        new Dotenv({
            path: './env',
        })
    ]
};