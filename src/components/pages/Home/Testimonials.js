import { useRef } from 'react';
import customer1Image from './assets/customer-sophia.jpg';
import customer2Image from './assets/customer-daniel.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Sophia Reynolds',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `The food was fresh, beautifully presented, and full of flavor. It
      felt like a little Mediterranean escape in the middle of Chicago.`,
  },
  {
    fullName: 'Daniel Brooks',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Everything from the service to the lemon dessert was outstanding.
      Little Lemon has quickly become our favorite neighborhood restaurant.`,
  },
  {
    fullName: 'Olivia Carter',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `A welcoming atmosphere, generous portions, and genuinely friendly
      people. The Greek salad alone is worth coming back for.`,
  },
  {
    fullName: 'Marcus Lee',
    image: customer4Image,
    rating: [1, 1, 1, 1, 1],
    says: `Our reservation was effortless and the evening exceeded every
      expectation. Traditional flavors with a thoughtful modern touch.`,
  },
];

const Testimonials = () => {
  const testimonialsList = useRef(null);

  const scrollTestimonials = direction => {
    const list = testimonialsList.current;
    if (!list) return;

    list.scrollBy({
      left: direction * list.clientWidth * 0.85,
      behavior: 'smooth',
    });
  };

  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="testimonials-header">
          <div>
            <h2 id="testimonials-title">Loved by our guests</h2>
            <p>See what the Little Lemon community is saying.</p>
          </div>
          <div className="testimonials-controls" aria-label="Testimonial navigation">
            <button
              type="button"
              aria-label="View previous testimonials"
              onClick={() => scrollTestimonials(-1)}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="View next testimonials"
              onClick={() => scrollTestimonials(1)}
            >
              →
            </button>
          </div>
        </div>
        <div className="testimonials-list" ref={testimonialsList}>
          {customers.map(customer =>
            <TestimonialCard key={customer.fullName} customer={customer} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
