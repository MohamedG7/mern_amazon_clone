require('dotenv').config({ path: '../config.env' });

const options = { useNewUrlParser: true, useUnifiedTopology: true };
const dbURI = process.env.MONGO_DB_URI;

const dataConnection = async (server, PORT, mongoose) => {
    await mongoose.connect(dbURI, options).then((result) => {
        console.log('MongoDB Connection Success 👍');
        server.listen(PORT, () => console.log(`server is running on ${PORT}`));
    }).catch((error) => console.log("MongoDB Connection Failed 💥", "<---->", error));
};

module.exports = {
    dataConnection
};