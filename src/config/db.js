import mongoose from "mongoose";

export const connect = () => {
    mongoose.connect(
      `mongodb+srv://${process.env.db_username}:${process.env.db_password}@cluster0.1izqg.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`
    );
}

