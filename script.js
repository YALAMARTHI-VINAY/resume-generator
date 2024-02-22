document
  .getElementById("resumeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const name = formData.get("name");
    const dob = new Date(formData.get("dob"));
    const email = formData.get("email");
    const phone = formData.get("phone");
    const education = formData.get("education");
    const skills = formData.get("skills");
    const projects = formData.get("projects");
    const certifications = formData.get("certifications");
    const reference = formData.get("reference");
    const biodata = formData.get("biodata");
    const age = calculateAge(dob);

    const resume = `
        <h2 align="center" ><strong>Resume</strong></h2>
        <h3><strong>Introduction</strong></h3>

        <p>Hello, I'm  <strong>${name}</strong> data enthusiast .At <strong> ${age}years </strong>  young, I offer a fresh perspective and a passion for innovation.  I bring a blend of creativity and analytical prowess honed through various projects and  years of experience. You can reach me at <strong> ${email} </strong> or <strong> ${phone} </strong>. Let's connect and discuss how we can unlock the power of data together!</p>
        <p>${biodata}</p>
    
        <h3><strong>Education:</strong></h3> <hr>
        <ul>
        <li>${education}</li>
        <li>Secondary Education</li>
        <li>Primary Education</li>
        </ul>


        <h3><strong>Skills:</strong></h3> <hr>
        <ul>
        <li>${skills}</li>
        <li><strong>Programming Languages:</strong> C, C++, Python, HTML, CSS, Java, JavaScript </li>
        <li>Problem-Solving </li>
        <li>Algorithm and Data Structures</li>
        <li>Software Development Life Cycle </li>
        <li>Critical Thinking</li>
        <li>Continuous Learning</li>
        </ul>

        <h3><strong>Projects:</strong></h3><hr>
        <ul>
        <li>${projects}</li>
        <li>Personal website</li>
        <li>To-do list Application</li>
        <li>Calculator</li>
        <li>Currency Converter</li>
        </ul>

        <h3><strong>Certification:</strong></h3><hr>
        <ul>
        <li>${certifications}</li>
        <li>AWS Certified Developer</li>
        <li>Oracle Certified Associate </li>
        <li>Project Management Professional</li>
        <li>Certified Ethical Hacker</li>
        </ul>
        
        <h3><strong>References:</strong></h3><hr>
        <p>${reference}</p>
        <p><strong>Sundar pichai</strong></p>

        
        
    `;

    document.getElementById("resume").innerHTML = resume;
    document.getElementById("resume").style.display = "block";
  });

function calculateAge(dob) {
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
