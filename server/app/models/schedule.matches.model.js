module.exports = (mongoose) => {

    const AcceptedTeams = mongoose.model(
     "acceptedteams",
      mongoose.Schema(
       {
        teamName: String,
        apponentTeam: String,
        matchVenue:String,
        teamCategory:String,
       },
       { timestamps: true }
     )
   );
   
   return AcceptedTeams;
 };
 