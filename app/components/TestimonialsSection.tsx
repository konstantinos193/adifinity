import { useState } from 'react';
import Slider from 'react-slick';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  image: string;
  time_ago: string;
}

const staticReviews: Review[] = [
  {
    author_name: 'Pit Karajohn',
    rating: 5,
    text: 'Άριστοι επαγγελματίες με εμπειρία ετών στο χώρο. Με διαφορά το καλύτερο γραφείο στην περιοχή',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocKlC7XOBYxeV9wcDuaCS7gBZ1L63KPDKtfhXqxgbaQf4K39Fg=w36-h36-p-rp-mo-ba2-br100',
    time_ago: 'πριν από 2 μήνες',
  },
  {
    author_name: 'ΣΤΕΦΑΝΟΣ ΜΑΛΕΣΚΟΣ',
    rating: 5,
    text: 'Γνώστες του αντικειμένου, άψογη εξυπηρέτηση και άριστη συνεργασία.',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocI8XKXADowxhbBz_F64VeojH_XHHEBe4sCXe2XTsNwwcnCT-g=w36-h36-p-rp-mo-ba3-br100',
    time_ago: 'πριν από έναν χρόνο',
  },
  {
    author_name: 'Παναγιωτα Στρεβινα',
    rating: 5,
    text: 'Υπέροχος επαγγελματίας με συνέπεια και ξεπέρασε τις προσδοκίες μας σε ότι ζητήθηκε... 👍👍👍…',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocK7BFFzA-IeIYHqPd5hkdrjXhPmbWKAM2i0allWMYjfWyzUZQ=w36-h36-p-rp-mo-br100',
    time_ago: 'πριν από 2 χρόνια',
  },
  {
    author_name: 'Ermioni Zerva',
    rating: 5,
    text: 'επαγγελματισμός, πρωτότυπες ιδέες, λογότυπα που εκφράζουν την κάθε επιχείρηση τέλεια γραφιστική και όχι μόνο δουλειά.',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocJbJHyRb4-oYR7Cz1bs3jb7azf_U9CXcMveOlFwjlIZGVg8PQ=w36-h36-p-rp-mo-br100',
    time_ago: 'πριν από 2 χρόνια',
  },
  {
    author_name: 'Δημητρης Σαριδακης',
    rating: 5,
    text: 'Από την μικρή συνεργασία που είχα με την επιχείριση μόνο θετικές λέξεις μπορώ να γράψω... Ένα μεγάλο μπράβο στον Μάνο και σε όλους συντελούν για να βγεί αυτό το αποτέλεσμα τουλάχιστον στα δικά μου χέρια....',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocLcPFpKomOCax38fqr3WUu-dpxXWk9oVu6JbaWB5Qb36G08bA=w36-h36-p-rp-mo-ba4-br100',
    time_ago: 'πριν από 2 χρόνια',
  },
];

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <ChevronRightIcon className="w-6 h-6 text-[#01FFFF]" />
    </div>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <ChevronLeftIcon className="w-6 h-6 text-[#01FFFF]" />
    </div>
  );
}

export default function TestimonialsSection() {
  const [reviews] = useState<Review[]>(staticReviews);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="μαρτυρίες" className="py-10 bg-gradient-to-b from-[#0A1A24] to-[#07141C]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-8 text-[#01FFFF]">Η Φωνή των Πελατών μας</h2>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="p-4">
              <div className="bg-[var(--background)] p-6 rounded-xl shadow-lg border border-transparent hover:border-[var(--accent)] transition-all duration-300 text-center h-auto flex flex-col justify-between">
                <div>
                  <img src="/placeholder.svg" alt={review.author_name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                  <p className="mb-4 text-sm italic text-white line-clamp-4">"{review.text}"</p>
                  <h4 className="text-lg font-bold text-[var(--accent)]">{review.author_name}</h4>
                  <p className="text-xs text-gray-400">{review.time_ago}</p>
                </div>
                <div className="flex justify-center mt-2">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <span key={i} className="text-[#FFD700]">★</span>
                  ))}
                  {Array.from({ length: 5 - review.rating }, (_, i) => (
                    <span key={i} className="text-gray-400">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

