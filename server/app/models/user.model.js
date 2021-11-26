module.exports = (mongoose) => {
  const User = mongoose.model(
    "user",
    mongoose.Schema(
      {
        coachFirstName: String,
        coachLastName: String,
        coachPhoneNumber: String,
        coachEmail: String,
        teamName: String,
        teamStatus: String,
        teamCaptainName: String,
        teamPlayers: [
          {
            playerFullName: String,
          },
        ],
      },
      { timestamps: true }
    )
  );
  return User;
};
