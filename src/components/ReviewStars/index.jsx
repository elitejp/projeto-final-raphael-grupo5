import { StyledReviewStars } from "./styles";
import Rating from '@mui/material/Rating';

function ReviewStars({ reviewPoints }) {
  return (
    <StyledReviewStars>
      <Rating name="half-rating-read" defaultValue={reviewPoints} precision={0.5} readOnly />
    </StyledReviewStars>
  );
}

export default ReviewStars;
