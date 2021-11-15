module.exports = (mongoose) => {

    const HotelDirector = mongoose.model(
     "hoteldirector",
      mongoose.Schema(
       {
         coachName: String,
         coachEmail: String,
         coachVenue:String
       },
       { timestamps: true }
     )
   );
   
   return HotelDirector;
 };
 