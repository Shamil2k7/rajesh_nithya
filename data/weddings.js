export const weddingProfiles = {
  "rajesh-nithya": {
    slug: "rajesh-nithya",
    metaTitle: "Rajesh & Nithya | Wedding Invitation",
    metaDescription: "With the blessings of our families, Rajesh Kumar E R and Nithya Suni invite you to celebrate their special day on January 7, 2027, at Guruvayur.",
    religiousGreeting: "Om Shree Ganeshay Namah",
    parentIntro: "Together with their families",
    groom: {
      fullName: "Rajesh Kumar E R",
      firstName: "Rajesh",
      role: "Groom"
    },
    bride: {
      fullName: "Nithya Suni",
      firstName: "Nithya",
      role: "Bride"
    },
    requestPresenceText: "Request the pleasure of your presence",
    invitationMessage: "Together with their families, Rajesh Kumar E R and Nithya Suni cordially invite you to join the occasion of their joyous commitment.",
    date: {
      dayOfWeek: "THURSDAY",
      day: "07",
      month: "JANUARY",
      year: "2027",
      time: "9:30 AM",
      displayFormatted: "Thursday, January 07, 2027",
      displayTime: "AT 9:30 AM",
      isoDateTime: "2027-01-07T09:30:00+05:30",
      calendarTitle: "Wedding Ceremony: Rajesh Kumar E R & Nithya Suni",
      calendarDescription: "Wedding Ceremony of Rajesh Kumar E R & Nithya Suni at Sree Krishna Temple, Guruvayur.",
    },
    venue: {
      sectionTitle: "Join Us at Guruvayur",
      name: "SREE KRISHNA TEMPLE",
      location: "GURUVAYUR",
      stateCountry: "Thrissur, Kerala, India",
      sanctumNote: "Under the sacred auspices of Lord Guruvayurappan",
      googleMapsUrl: "https://maps.app.goo.gl/SmQajpNfCXqHx8Ci7",
      directionsGuide: "Located in the heart of Guruvayur, easily accessible from Guruvayur Railway Station (1 km) and Cochin International Airport (80 km)."
    },
    closingMessage: {
      presenceNote: "Your presence will make our special day even more memorable.",
      withLove: "With love and blessings,",
      signatures: "Rajesh Kumar E R & Nithya Suni",
      familyGreeting: "Families of Rajesh & Nithya"
    },
    theme: {
      primaryBg: "#FFF5E6",
      secondaryBg: "#FCEEDB",
      primaryGold: "#D99A35",
      deepGold: "#B97818",
      floralPink: "#E99A9D",
      leafGreen: "#637D45",
      textColor: "#654523"
    },
    media: {
      ganeshaImage: "/assets/images/ganesha.png",
      lotusLeft: "/assets/images/lotus-left.png",
      lotusRight: "/assets/images/lotus-right.png",
      lotusBottom: "/assets/images/lotus-bottom.png",
      lotusBuds: "/assets/images/lotus-buds.png",
      lotusSingle: "/assets/images/lotus-single.png",
      mandalaBottom: "/assets/images/mandala-bottom.png",
      bgPattern: "/assets/images/bg-pattern.png",
      ogImage: "/assets/images/og-image.jpg",
      music: {
        title: "Traditional Mangala Vadhyam",
        subtitle: "Auspicious Wedding Melody",
        srcMp3: "/assets/audio/wedding-song.mp3",
        srcWeba: "/assets/audio/wedding-song.weba"
      }
    }
  }
};

export function getWeddingBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return weddingProfiles[normalized] || null;
}

export function getDefaultWedding() {
  return weddingProfiles["rajesh-nithya"];
}

export function getAllWeddingSlugs() {
  return Object.keys(weddingProfiles);
}
