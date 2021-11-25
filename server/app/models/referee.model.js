module.exports = (mongoose) => {
    const Referee = mongoose.model(
        "referee",
        mongoose.Schema(
            {
                refereeName: String,
                refereeEmail: String,
                refereeUsername: String,
                refereePhonenumber: String,
                refereeDob: Date,
                refereeEventcategory: String,
                matchAssign: String
            },
            { timestamps: true }
        )
    );
    return Referee;
};