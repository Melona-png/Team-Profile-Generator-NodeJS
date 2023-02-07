function generateHTML(manager, engineer, intern) {
  let html = ` 
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href=
    "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous">
    <link rel="stylesheet" href="./public/style.css">
    <title>Teams</title>
</head>
<body>
<h4>My Team</h4>
  <main>`;
  let bottom = `
  </main>
  </body>
  </html>`;


  let middle = ``
  for (const x of manager) {
    let block = `
  <div class ="row justify-content-center">
    <div class="card" style="width: 18rem;">
      <p class="card">${x.getName()}</p>
        <p class="card">${x.getOffice()}</p>
        <p class="card">${x.getEmail()}</p>
        <p class="card">${x.getId()}</p>
        <div class="card-body-center">
        <div class="card-items">
          
        </div>
      </div>
    </div>
  </div >`;
    middle = middle + block;
  }

  for (const x of engineer) {
    let block = `
  <div class="row justify-content-center">
    <div class="card" style="width: 18rem;">
      <p class="carde">${x.getName()}</p>
        <p class="card">${x.getGithub()}</p>
        <p class="card">${x.getEmail()}</p>
        <p class="card">${x.getId()}</p>
        <div class="card-body-center">
        <div class="card-items">
          
        </div>
      </div>
    </div>
  </div >`;
    middle = middle + block;
  }
  for (const x of intern) {
    let block = `
  <div class="row justify-content-center">
    <div class="card" style="width: 18rem;">
      <p class="card">${x.getName()}</p>
        <p class="card">${x.getSchool()}</p>
        <p class="card">${x.getEmail()}</p>
        <p class="card">${x.getId()}</p>
        <div class="card-body-center">
        <div class="card-items">
          
        </div>
      </div>
    </div>
  </div >`;
    middle = middle + block;
  }


  return html+middle+bottom;
}
module.exports = {generateHTML};