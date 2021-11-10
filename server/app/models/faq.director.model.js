module.exports = (mongoose) => {
    const Faq = mongoose.model(
      "faq",
      mongoose.Schema(
        {
          que : String,
          ans : String
        },
        { timestamps: true }
      )
    );
    return Faq;
  };
  