document.getElementById("contactForm").addEventListener("submit"
    , function(e) {
    e.preventDefault();
    document.getElementById("msg").textContent = "Message sent!";
    document.getElementById("msg").style.color = "green";
});

  const nextBtn = document.getElementById("next");
  const title = document.getElementById("text1");
  const list = document.getElementById("lts");
  const img = document.getElementById("mainImage");

  nextBtn.addEventListener("click", function () {
    title.textContent = "Education";

 
    list.innerHTML = `
      <h2 id="text1">Education</h2>
      <li>BSc CSIT - TU</li>
      <li>+2 Science - BASU</li>
      <li>SEE - NEB</li>
    `;

    img.src = "image/";
    img.alt = "education";
  });
