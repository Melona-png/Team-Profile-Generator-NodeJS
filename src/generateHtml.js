function generateHTML() {
  let html = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./styles.css">
      <title>My Team</title>
  </head>
  
  <body>
      <header>
          <h1>MY TEAM</h1>
      </header><main class = "card-container">`;

  for (const team of employeeInfo) {
      html += `
      <div class="card">
        <div class="name">
          <p class="card-name">${team.name}</p>
          <p class="card-title">${team.getRole()}</p>
        </div>
        <div class="card-body">
          <div class="card-items">
            <p class="card-1">ID: ${team.id}</p>
            <p class="card-2">EMAIL: <a href="mailto:${team.email}">${team.email}</a> </p>
            <p class="card-3">${team instanceof Manager ? 'Office Number: ' + team.office
            : employee instanceof Engineer? `GitHub: <a href='https://github.com/${employee.github}'>${employee.github}</a>` : 
            'School: ' + employee.school
          }</p>
          </div>
        </div>
      </div>`;
  }
  html += `</main> </body> </html>`
  fs.writeFileSync("./public/index.html", html);
}