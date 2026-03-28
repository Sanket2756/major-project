const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const { isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

const ValidateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }
  next();
};

router.post(
  "/",
  isLoggedIn,
  ValidateReview,
  wrapAsync(reviewController.createReview)
);

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.deleteReview)
);

module.exports = router;