module.exports = (mongoose) => {

    const Volunteerlist = mongoose.model(
     "volunteerlist",
      mongoose.Schema(
       {
        VolunteerId: Number,
        VolunteerName: String,
        VolunteerEmail:String,
        VolunteerVenue: String,
       },
       { timestamps: true }
     )
   );
   
   return Volunteerlist;
 };
 