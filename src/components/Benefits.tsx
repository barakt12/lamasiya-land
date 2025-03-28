
import React from 'react';
import { Heart, TreePine, Gem, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Heart className="h-10 w-10 text-red-500" />,
      title: "תורמים לקהילה",
      description: "עוזרים לאנשים שצריכים חפצים אבל לא יכולים לקנות חדשים"
    },
    {
      icon: <TreePine className="h-10 w-10 text-green-600" />,
      title: "שומרים על הסביבה",
      description: "מצמצמים פסולת ומאריכים את חיי המוצרים"
    },
    {
      icon: <Gem className="h-10 w-10 text-lamasia-vibrantpurple" />,
      title: "מתפנים מחפצים",
      description: "מפנים מקום בבית ונפרדים מחפצים שכבר לא צריכים"
    },
    {
      icon: <Users className="h-10 w-10 text-lamasia-vibrantorange" />,
      title: "מכירים אנשים חדשים",
      description: "יוצרים קשרים חדשים עם אנשים מהקהילה שלכם"
    }
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">למה כדאי למסור?</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          כשאתם מוסרים חפצים במקום לזרוק אותם, אתם תורמים לסביבה, לקהילה ולעצמכם
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow border border-gray-100 hover:shadow-lg transition-shadow group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-lamasia-peach/10 rounded-bl-full"></div>
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-lamasia-vibrantpurple transition-colors">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-lamasia-purple/20 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">מה אפשר למסור?</h3>
              <p className="text-lg text-gray-700 mb-6">
                כמעט כל דבר שנמצא במצב תקין! רהיטים, כלי בית, מוצרי חשמל, בגדים, 
                צעצועים, ספרים ועוד. אנו מבקשים רק שהפריטים יהיו במצב סביר לשימוש ונקיים.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full text-sm shadow-sm">רהיטים</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm shadow-sm">מכשירי חשמל</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm shadow-sm">כלי בית</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm shadow-sm">ספרים</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm shadow-sm">צעצועים</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm shadow-sm">בגדים</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm shadow-sm">כלי עבודה</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm shadow-sm">ועוד...</span>
              </div>
            </div>
            <div className="md:w-2/5 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9uYXRlJTIwaXRlbXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                alt="פריטים למסירה" 
                className="rounded-xl shadow-lg w-full h-60 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
