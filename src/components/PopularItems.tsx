
import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const PopularItems = () => {
  const items = [
    {
      title: "ספה תלת מושבית",
      location: "תל אביב",
      timeAgo: "לפני 2 שעות",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      category: "רהיטים",
      color: "bg-pink-500"
    },
    {
      title: "שולחן אוכל + 4 כיסאות",
      location: "חיפה",
      timeAgo: "לפני 5 שעות",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      category: "רהיטים",
      color: "bg-pink-500"
    },
    {
      title: "מיקרוגל במצב מצוין",
      location: "ירושלים",
      timeAgo: "לפני יום",
      image: "https://images.unsplash.com/photo-1585659722983-3a681d258d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1pY3Jvd2F2ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      category: "מכשירי חשמל",
      color: "bg-blue-500"
    },
    {
      title: "אופניים לילדים",
      location: "באר שבע",
      timeAgo: "לפני 3 ימים",
      image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2lkcyUyMGJpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      category: "לילדים",
      color: "bg-green-500"
    },
    {
      title: "מדפי ספרים",
      location: "רמת גן",
      timeAgo: "לפני 6 שעות",
      image: "https://images.unsplash.com/photo-1592154575424-a8eb1c811c82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3NoZWxmfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "רהיטים",
      color: "bg-pink-500"
    },
    {
      title: "ערכת כלי עבודה",
      location: "נתניה",
      timeAgo: "לפני 2 ימים",
      image: "https://images.unsplash.com/photo-1581147036324-c47a03a13022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9vbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      category: "כלי עבודה",
      color: "bg-yellow-500"
    },
  ];

  return (
    <section id="items" className="py-20 bg-lamasia-peach/10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">פריטים פופולריים למסירה</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          הנה כמה מהפריטים הזמינים כרגע למסירה. התחברו כדי לראות את כל הפריטים ולפנות לבעליהם.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="item-card bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <span className={`${item.color} text-white text-xs px-2 py-1 rounded-full`}>
                    {item.category}
                  </span>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="h-4 w-4 ml-1" />
                  {item.location}
                  <div className="mx-2 w-1 h-1 rounded-full bg-gray-300"></div>
                  <Clock className="h-4 w-4 ml-1" />
                  {item.timeAgo}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm text-gray-500">לחצו לפרטים נוספים</span>
                  <button className="text-lamasia-vibrantpurple hover:text-lamasia-vibrantpink transition-colors text-sm font-medium">
                    אני מעוניין/ת
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center bg-lamasia-vibrantpurple text-white px-6 py-3 rounded-full hover:bg-lamasia-vibrantpurple/90 transition-colors font-medium">
            צפייה בכל הפריטים
            <span className="mr-2 w-5 h-5 rounded-full bg-white/30 inline-flex items-center justify-center">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
