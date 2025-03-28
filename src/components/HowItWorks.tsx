
import React from 'react';
import { Camera, Search, MessageCircle, Truck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Camera className="h-10 w-10 text-lamasia-vibrantpurple" />,
      title: "צלמו את הפריט",
      description: "צלמו תמונה ברורה של הפריט שברצונכם למסור והוסיפו תיאור קצר"
    },
    {
      icon: <Search className="h-10 w-10 text-lamasia-vibrantorange" />,
      title: "אנשים יחפשו ויפנו",
      description: "מעוניינים יחפשו ויפנו אליכם בהודעה פרטית באפליקציה"
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-lamasia-vibrantpink" />,
      title: "תיאום מסירה",
      description: "קבעו זמן ומקום לאיסוף או מסירה של הפריט בצורה נוחה"
    },
    {
      icon: <Truck className="h-10 w-10 text-green-500" />,
      title: "העברת הפריט",
      description: "הפריט עובר לאדם שצריך אותו, וכולם מרוויחים - אתם, הם והסביבה"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-lamasia-green/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="wavy-border gradient-text">איך זה עובד?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center group"
            >
              <div className="relative mx-auto w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-sm mb-6 group-hover:-translate-y-2 transition-transform">
                <div className="absolute inset-0 bg-lamasia-yellow/50 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {step.icon}
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-lamasia-vibrantpurple text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
