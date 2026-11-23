// Wedding Reception Master Configuration
// Couple: V.N. Ashwanth & N. Boomika
// Reception Date: Saturday, 12 December 2026 | 5:30 PM - 9:00 PM IST
// Venue: PSK Mahal, Pattlur Nall Road (Anthiyur Bhavani)

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
  venueSub: "PSK MAHAL, ANTHIYUR BHAVANI",
  address: "Pattlur Nall Road",
  city: "Anthiyur Bhavani, Tamil Nadu",
  
  // Official Google Maps Direct Navigation (Guaranteed to work on all laptops, desktops, and mobile devices)
  googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=PSK+MAHAL+A%2FC+Patlur+Nalroad+Anthiyur+Bhavani",
  mapEmbedUrl: "https://maps.google.com/maps?q=PSK+MAHAL,+Anthiyur+Bhavani&t=&z=14&ie=UTF8&iwloc=&output=embed",
  
  // Traditional Tamil Wedding Instrumental Music
  musicUrl: "/audio/tamil-wedding-music.mp3",
  
  // Invitation Quotes
  invitationQuote: "With great joy, we invite you to join us as we celebrate this beautiful occasion.",
  blessingText: "Together with our families, we request the honor of your presence and blessings at the wedding reception of our children.",
  
  // Reception Timeline (Exclusively Reception)
  timeline: [
    {
      time: "5:30 PM",
      title: "Mangala Isai & Guest Arrival",
      desc: "Auspicious music welcoming family and beloved friends."
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

  // Photo Gallery - Only Bride & Groom Picture and Hand in Hand Picture
  gallery: [
    {
      id: 1,
      url: "/images/couple-heart.jpg",
      caption: "Ashwanth & Boomika — A heart full of love, a lifetime of togetherness",
      alt: "V.N. Ashwanth & N. Boomika",
      title: "Ashwanth & Boomika"
    },
    {
      id: 2,
      url: "/images/holding-hands.jpg",
      caption: "Hand in hand, stepping into our forever",
      alt: "Ashwanth & Boomika holding hands",
      title: "Hand in Hand"
    }
  ],

  // Google Calendar Link generator
  calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + 
    encodeURIComponent("V.N. Ashwanth & N. Boomika - Wedding Reception") +
    "&dates=20261212T120000Z/20261212T153000Z" + 
    "&details=" + encodeURIComponent("With great joy, you are invited to the Wedding Reception of V.N. Ashwanth & N. Boomika at PSK Mahal, Pattlur Nall Road.") +
    "&location=" + encodeURIComponent("PSK Mahal, Pattlur Nall Road, Anthiyur Bhavani")
};
