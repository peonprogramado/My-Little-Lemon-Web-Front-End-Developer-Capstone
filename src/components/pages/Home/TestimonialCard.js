import {
  faStar,
  faStarHalfStroke
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TestimonialCard.css';

const ratingLevels = { '0.5': faStarHalfStroke, '1': faStar, };

const TestimonialCard = ({ customer }) => {
  const totalRating = customer.rating.reduce(
    (total, point) => total + point,
    0
  );

  return (
    <article className="testimonial-card">
      <div className="testimonial-card-header">
        <div className="testimonial-card-customer">
          <img src={customer.image} alt="" />
          <div>
            <h3>{customer.fullName}</h3>
            <span aria-label={`Rating: ${totalRating} out of 5 stars`}>
              {customer.rating.map((ratingPoint, index) =>
                <FontAwesomeIcon
                  key={index}
                  icon={ratingLevels[ratingPoint]}
                  size="xs"
                  aria-hidden="true"
                />
              )}
            </span>
          </div>
        </div>
        <span className="testimonial-quote-mark" aria-hidden="true">“</span>
      </div>
      <blockquote>
        <p>“{customer.says}”</p>
      </blockquote>
    </article>
  );
};

export default TestimonialCard;
