const employees = [
  {
    id: "C101",
    name: "Varun",
    role: "Junior Web Developer",
    experience: "2 Years",
    payout: "25000",
  },
  {
    id: "C102",
    name: "Srinika",
    role: "Junior Web Developer",
    experience: "1 Year",
    payout: "20000",
  },
  {
    id: "C103",
    name: "Rakshitha",
    role: "Front End Developer",
    experience: "3 Years",
    payout: "30000",
  },
  {
    id: "C104",
    name: "Hema",
    role: "Junior Web Developer",
    experience: "3 Years",
    payout: "25000",
  },
  {
    id: "C105",
    name: "Deepak",
    role: "Front End Developer",
    experience: "4 Years",
    payout: "35000",
  },
  {
    id: "C106",
    name: "Sakthi",
    role: "Back End Developer",
    experience: "2 Years",
    payout: "30000",
  },
  {
    id: "C107",
    name: "Dakshan",
    role: "Senior Front End Developer",
    experience: "5 Years",
    payout: "45000",
  },
  {
    id: "C108",
    name: "Ananth",
    role: "BDE",
    experience: "2 Years",
    payout: "20000",
  },
  {
    id: "C109",
    name: "Sharaddha",
    role: "Business Associate",
    experience: "1 Year",
    payout: "15000",
  },
  {
    id: "C110",
    name: "Dinesh",
    role: "Tech Lead",
    experience: "4 Years",
    payout: "65000",
  },
];

const place = document.querySelector(".database");

for (const employee of employees) {
  const row = document.createElement("tr");
  row.classList.add(employee.name);

  row.innerHTML = `
    <td>${employee.id}</td> 
    <td>${employee.name}</td> 
    <td>${employee.role}</td>
    <td>${employee.role}</td>
    <td>${employee.experience}</td>
    <td>${employee.payout}</td>
  `;

  place.appendChild(row);
}
