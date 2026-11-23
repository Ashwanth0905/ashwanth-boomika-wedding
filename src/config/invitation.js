// Wedding Reception Master Configuration
// Couple: V.N. Ashwanth & N. Boomika
// Reception Date: Saturday, 12 December 2026 | 5:30 PM - 9:00 PM IST
// Venue: PSK Mahal, Pattlur Nall Road

export const weddingData = {
  groom: "V.N. Ashwanth",
  groomShort: "Ashwanth",
  bride: "N. Boomika",
  brideShort: "Boomika",
  event: "WEDDING RECEPTION",
  
  // Date and Time
  dateText: "Saturday, 12 December 2026",
  dayText: "Saturday",
  timeText: "5:30 PM – 9:00 PM",
  targetDateISO: "2026-12-12T17:30:00+05:30",
  
  // Venue & Location
  venue: "PSK Mahal",
  address: "Pattlur Nall Road",
  city: "Tamil Nadu",
  googleMapsUrl: "https://maps.app.goo.gl/xRLy7N8UZZJyos1u6",
  
  // Invitation Quotes
  invitationQuote: "With great joy, we invite you to join us as we celebrate this beautiful occasion.",
  blessingText: "Together with our families, we request the honor of your presence and blessings at the wedding reception of our children.",
  
  // Reception Timeline (Exclusively Reception)
  timeline: [
    {
      time: "5:30 PM",
      title: "Mangala Isai & Guest Arrival",
      desc: "Welcome drinks and auspicious music welcoming family and beloved friends."
    },
    {
      time: "6:30 PM",
      title: "Grand Couple Arrival",
      desc: "Welcoming the newly wedded couple Ashwanth & Boomika to the reception stage."
    },
    {
      time: "7:00 PM",
      title: "Stage Greetings & Felicitations",
      desc: "Warm wishes, heartfelt blessings and celebratory photography with the couple."
    },
    {
      time: "7:30 PM Onwards",
      title: "Royal Reception Feast",
      desc: "Indulge in an exquisite traditional celebratory dinner banquet."
    }
  ],

  // Photo Gallery - Authentic Bride & Groom Photographs
  gallery: [
    {
      id: 1,
      url: "/images/couple-heart.jpg",
      caption: "Ashwanth & Boomika — A heart full of love, a lifetime of togetherness",
      alt: "V.N. Ashwanth & N. Boomika making a heart pose",
      featured: true
    },
    {
      id: 2,
      url: "/images/groom-ashwanth.jpg",
      caption: "The Groom — V.N. Ashwanth",
      alt: "V.N. Ashwanth Groom Portrait"
    },
    {
      id: 3,
      url: "/images/bride-boomika.jpg",
      caption: "The Bride — N. Boomika",
      alt: "N. Boomika Bride Portrait"
    },
    {
      id: 4,
      url: "/images/holding-hands.jpg",
      caption: "Hand in hand, stepping into our forever",
      alt: "Ashwanth & Boomika holding hands"
    }
  ],

  // Google Calendar Link generator
  calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + 
    encodeURIComponent("Ashwanth & Boomika - Wedding Reception") +
    "&dates=20261212T120000Z/20261212T153000Z" + 
    "&details=" + encodeURIComponent("With great joy, you are invited to the Wedding Reception of V.N. Ashwanth & N. Boomika at PSK Mahal, Pattlur Nall Road.") +
    "&location=" + encodeURIComponent("PSK Mahal, Pattlur Nall Road")
};
