window.onload=function(){
  var upload = document.getElementById('upload');
  upload.addEventListener('change', fileSelection, false);
}

function fileSelection() {
    var file = upload.files[0],
        reader = new FileReader();

    reader.onload = function(e) {
        readXml = event.target.result;
        console.log(readXml);
        var parser = new DOMParser();

        var doc = parser.parseFromString(readXml, "text/xml");
        window.xml = doc
    }
     
    reader.readAsText(file);

}

$(document).ready(function(){
  $("#trigger-input-file").click(function(){
    $('input[type="file"]').trigger("click");
  });
});
