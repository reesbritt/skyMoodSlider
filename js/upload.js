//Adds an eventListener to the upload file link to call the fileSelection function.
window.onload=function(){
  var upload = document.getElementById('upload');
  upload.addEventListener('change', fileSelection, false);
}

//Takes the uploaded file and parses it as a xml document
function fileSelection() {
    var file = upload.files[0],
        reader = new FileReader();

    reader.onload = function(e) {
        readXml = event.target.result;
        var parser = new DOMParser();
        var doc = parser.parseFromString(readXml, "text/xml");
        //Stores the xml document as a global variable to be accessed by the other javascript functions
        window.xml = doc
    }
     
    reader.readAsText(file);

}

//Allows the text link to be used to trigger a file upload input
$(document).ready(function(){
  $("#trigger-input-file").click(function(){
    $('input[type="file"]').trigger("click");
  });
});
