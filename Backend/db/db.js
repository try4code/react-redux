import mongoose from 'mongoose';

const db = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("connection successful ", conn.connection.host)
    }
    catch (err) {
        console.log("connection error: ", err);
        process.exit(1);
    }
}

export default db;