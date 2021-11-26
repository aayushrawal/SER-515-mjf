module.exports = (mongoose) => {
  const Sponsor = mongoose.model(
    "sponsor",
    mongoose.Schema(
      {
        _id: mongoose.Schema.Types.ObjectId,
        sponsorName: String,
        sponsorImage: {
          type: String,
        },
      },
      { timestamps: true }
    )
  );
  return Sponsor;
};
