function generateHTML {
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
  <main>
    <div class="row justify-content-center">
      <div class="card" style="width: 18rem;">
        <p class="card-name">${Employee.name}</p>
          <p class="card-title">${Employee.getRole()}</p>
          <div class="card-body-center">
          <div class="card-items">
            
          </div>
        </div>
      </div>
    </div>
    </main>
</body>
</html>`
};

for (const employee of employeeInfo) {
    html += 