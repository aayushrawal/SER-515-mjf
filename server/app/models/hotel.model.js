module.exports = (mongoose) => {

   const Hotel = mongoose.model(
    "hotel",
     mongoose.Schema(
      {
        coachName: String,
        coachEmail: String,
      },
      { timestamps: true }
    )
  );
  
  return Hotel;
};
