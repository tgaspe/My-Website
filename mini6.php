<?php

  // ----- Main Program -----

  // -- Display Common Header --
  display("matter/mini6header.txt");

  // -- Display different Bodies --
  if (sizeof($_GET) == 0 || $_GET["Page"] == "Home") {

    //Display Home
    display("matter/mini6home.txt");

  } else if ($_GET["Page"] == "Hobbies") {

    //Display Hobbies
    display("matter/mini6hobbies.txt");
  } else {
    echo "404: Invalid Page!";
  }

  // -- Display Common Footer --
  display("matter/mini6footer.txt");

  // ----- End of Main -----


  // -- Display Function --
  function display($path) {
    $file_name = fopen($path, "r");

    while (!feof($file_name)) {
      $line = fgets($file_name);
      echo $line;
    }

    fclose($file_name);
  }

?>
