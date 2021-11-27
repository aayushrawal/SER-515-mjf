module.exports = (mongoose) => {

    const AcceptedTeams = mongoose.model(
     "acceptedteams",
      mongoose.Schema(
       {
        teamName: String,
        opponentTeam: String,
        matchVenue:String,
        teamCategory:String,
       },
       { timestamps: true }
     )
   );
   
   return AcceptedTeams;
 };
 