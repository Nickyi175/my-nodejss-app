import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export { app, server };
