// for generateHTML.js
htmlContent += `
      <div class="employee">
        <h2>${employee.name}</h2>
        <p>ID: ${employee.id}</p>
        <p>Email: ${employee.email}</p>
        <p>Office#: ${employee.office}</p>
      </div>
    `;
    

let html = `
    <html>
      <head>
        <title>Team</title>
      </head>
      <body>
        ${htmlContent}
      </body>
    </html>
  `;
