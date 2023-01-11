import app from "./app";

const port = 4000;//process.env.API_PORT;

app.listen(port, () => {
    console.log(`Connected successfully on port ${port}`);
});