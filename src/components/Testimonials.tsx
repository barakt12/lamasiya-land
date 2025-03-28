
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "מיכל כהן",
      location: "תל אביב",
      text: "מדהים לראות כמה מהר מצאתי בית חדש לספה שלי! תוך שעתיים מההודעה כבר הגיע מישהו לקחת אותה. ממליצה בחום.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      name: "אלעד לוי",
      location: "חיפה",
      text: "כמישהו שמשפץ את הדירה, זה היה פתרון מושלם לרהיטים שלא רציתי יותר. שמח שהם הלכו למשפחה שבאמת צריכה אותם.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "רותם שגב",
      location: "ירושלים",
      text: "מצאתי כאן שולחן עבודה מושלם שלא הייתי יכולה להרשות לעצמי לקנות חדש. האתר הזה הוא אוצר אמיתי!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  return (
    <section id="stories" className="py-20 bg-gradient-to-br from-lamasia-purple to-lamasia-purple/5">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">סיפורי הצלחה</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          הנה מה שאנשים אומרים על החוויה שלהם באתר למסירה
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow relative"
            >
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <div className="bg-lamasia-vibrantpurple text-white w-10 h-10 flex items-center justify-center rounded-full">
                  "
                </div>
              </div>
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-lamasia-peach"
                />
                <div className="mr-3">
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-6 md:p-10 shadow-lg max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 gradient-text">יש לכם סיפור הצלחה? שתפו אותנו!</h3>
            <p className="text-gray-600 mb-8">
              אנחנו אוהבים לשמוע על חוויות טובות באתר. ספרו לנו על פריט שמסרתם או קיבלתם ואיך זה השפיע עליכם.
            </p>
            <button className="bg-lamasia-vibrantpink text-white px-6 py-3 rounded-full hover:bg-lamasia-vibrantpink/90 transition-colors font-medium">
              שיתוף סיפור הצלחה
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
