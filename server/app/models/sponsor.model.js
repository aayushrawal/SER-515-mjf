module.exports = (mongoose) => {
  const Sponsor = mongoose.model(
    "sponsor",
    mongoose.Schema(
      {
        sponsorName: String,
        sponsorImage: {
          data: Buffer,
          contentType: String,
        },
      },
      { timestamps: true }
    )
  );
  return Sponsor;
};
