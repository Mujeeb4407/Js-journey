const person = {
  name: "Alhaji Abdul Ganiyy Atanda Raji",
  title: "Chief Imam of Ganmo",
  retiredProfession: "Retired Arabic and Islamic Studies Teacher",
  bio: "A respected religious leader and educator, known for his deep scholarship in Islamic theology, Arabic literature, and community guidance. He has dedicated his life to teaching, spiritual leadership, and preserving traditional knowledge.",
  contributions: [
    "Led Friday prayers and sermons for over 30 years in Ganmo Central Mosque",
    "Mentored dozens of young scholars in Arabic and Islamic jurisprudence",
    "Organized annual Maulid Nabiyy celebrations and Tafsir sessions during Ramadan",
    "Acted as a mediator in local family and land disputes with wisdom and fairness"
  ],
  publications: [
    {
      title: "Tirah al-Huda",
      description: "A poetic compilation in Arabic reflecting on divine guidance and moral conduct",
      language: "Arabic",
      year: 2005
    },
    {
      title: "Tirah al-Sulh",
      description: "Verses promoting peace, unity, and reconciliation within the Ummah",
      language: "Arabic",
      year: 2010
    },
    {
      title: "Tirah al-Tarbiyyah",
      description: "Educational poems used in madrasa settings to teach values and grammar",
      language: "Arabic",
      year: 2018
    }
  ],
  skills: [
    "Arabic Calligraphy",
    "Public Speaking",
    "Conflict Resolution",
    "Islamic Jurisprudence (Fiqh)",
    "Poetic Composition (Tirah)"
  ],
  contact: {
    phone: "+234 802 123 4567",
    address: "Ganmo, Kwara State, Nigeria",
    mosque: "Ganmo Central Mosque"
  }
};

const name = document.getElementById("myName").textContent = person.name;
const title = document.getElementById("myTitle").textContent = person.title;
const retiredProfession = document.getElementById("retiredProfession").textContent = person.retiredProfession;
const bio = document.getElementById("bio").textContent = person.bio;
const contributions = document.getElementById("contributions");
const skills = document.getElementById("skills");
const firstPublications = document.getElementById("publications1");
const secondPublications = document.getElementById("publications2");
const thirdPublications = document.getElementById("publications3");

person.contributions.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  contributions.appendChild(li);
});

person.skills.forEach(skill => {
  const li = document.createElement("li")
  li.textContent = skill;
  skills.appendChild(li);
});


firstPublications.innerHTML =
  `<h4>${person.publications[0].title}</h4>
<p>${person.publications[0].description}</p>
<p>${person.publications[0].language}</p>
<p>${person.publications[0].year}</p>`;

secondPublications.innerHTML =
  `<h4>${person.publications[1].title}</h4>
<p>${person.publications[1].description}</p>
<p>${person.publications[1].language}</p>
<p>${person.publications[1].year}</p>`;

thirdPublications.innerHTML =
  `<h4>${person.publications[2].title}</h4>
<p>${person.publications[2].description}</p>
<p>${person.publications[2].language}</p>
<p>${person.publications[2].year}</p>`;

/*function updateClock() {
  const now = new Date();
  let hours = now.getHours()
  const ux = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0')
  let time = `${hours}:${minutes}:${seconds} ${ux}`;
  document.getElementById("clock").textContent = time;
}
setInterval(updateClock, 1000);*/