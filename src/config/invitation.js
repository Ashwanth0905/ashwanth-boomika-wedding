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

  // Photo Gallery
  // The bride and groom photos will be uploaded here.
  // Replace these URLs or drop photos in public/images/
  gallery: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80",
      caption: "Two souls, one beautiful journey ahead",
      alt: "Ashwanth & Boomika"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
      caption: "A celebration of love, laughter & forever",
      alt: "Ashwanth & Boomika Moments"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
      caption: "Surrounded by tradition, blessed by elders",
      alt: "Royal Reception Elegance"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=80",
      caption: "Moments turning into everlasting memories",
      alt: "Celebration of Togetherness"
    }
  ],

  // Google Calendar Link generator
  calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + 
    encodeURIComponent("Ashwanth & Boomika - Wedding Reception") +
    "&dates=20261212T120000Z/20261212T153000Z" + 
    "&details=" + encodeURIComponent("With great joy, you are invited to the Wedding Reception of V.N. Ashwanth & N. Boomika at PSK Mahal, Pattlur Nall Road.") +
    "&location=" + encodeURIComponent("PSK Mahal, Pattlur Nall Road")
};
