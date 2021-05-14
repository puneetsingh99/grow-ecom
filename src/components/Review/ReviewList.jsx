import "./review-styles.css";

export const ReviewList = ({ reviews }) => {
  return (
    <ul className={`review-list`}>
      {reviews.map((aReview) => {
        console.log("review")
        console.log(aReview)
        const {_id: id, review} = aReview;
        return <li key={id}>{review}</li>;
      })}
    </ul>
  );
};
