<!--Factorial of a Number-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Factorial</title>
  </head>
  <body></body>
  <script>
    let fact = 1,
      n,
      i;
    n = parseInt(prompt("Enter n"));
    for (i = 1; i <= n; i++) {
      fact = fact * i;
    }
    document.write("The factorial of is:", fact);
  </script>
</html>
