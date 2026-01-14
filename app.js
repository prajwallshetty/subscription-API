import express from 'express';
const app = express();

import {PORT} from './config/env.js';
app.get('/', (req, res) => {
    res.send('welcome to the API');
});

app.listen(PORT,() => {
    console.log(`server is running on port http://localhost:${PORT}`);
})

export default app;