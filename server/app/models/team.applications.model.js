module.exports = (mongoose) => {

    const TeamApplicationlist = mongoose.model(
     "teamapplicationlist",
      mongoose.Schema(
       {
        teamName: String,
        coachName: String,
        teamStatus:String,
        coachEmail:String
       },
       { timestamps: true }
     )
   );
   
   return TeamApplicationlist;
 };
 