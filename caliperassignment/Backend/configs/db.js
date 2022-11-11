const mongoose=require("mongoose")



const connectDB = async () => {
  try {
    const conn = await mongoose.connect( "mongodb+srv://clipper:J123456789m@cluster0.xlvf7g7.mongodb.net/clipper?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,

        useUnifiedTopology: true,
      }
    );
    console.log(`mongoDB connected : ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports= connectDB;
