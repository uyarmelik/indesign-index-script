function createIndex() {
  var doc = app.activeDocument;
  var myIndex = doc.indexes.length > 0 ? doc.indexes[0] : doc.indexes.add();
  var words = [];
  var notFoundWords = [];

  var docFolder = doc.filePath;
  var filePath = new File(docFolder + "/words.txt");

  if (filePath.exists) {
    var file = new File(filePath);
    file.open("r");
    while (!file.eof) {
      var line = file.readln();
      if (line && line.length > 0) {
        words.push(line);
      }
    }
    file.close();
  } else {
    alert(
      "The words.txt file could not be found! Please place it in the folder where the InDesign file is located."
    );
    return;
  }

  for (var i = 0; i < words.length; i++) {
    var searchWord = words[i];
    app.findTextPreferences = NothingEnum.nothing;
    app.findTextPreferences.findWhat = searchWord;
    var foundItems = doc.findText();

    if (foundItems.length > 0) {
      for (var j = 0; j < foundItems.length; j++) {
        var foundText = foundItems[j];

        if (foundText != null) {
          var topic = myIndex.topics.add(searchWord);
          topic.pageReferences.add(foundText);
        }
      }
    } else {
      notFoundWords.push(searchWord);
    }
  }

  app.findTextPreferences = NothingEnum.nothing;

  if (notFoundWords.length > 0) {
    var notFoundFile = new File(docFolder + "/not_found.txt");
    notFoundFile.open("w");
    for (var k = 0; k < notFoundWords.length; k++) {
      notFoundFile.writeln(notFoundWords[k]);
    }
    notFoundFile.close();
    alert(
      "Index created! The words that could not be found have been saved in the not_found.txt file."
    );
  } else {
    alert("Index created! All words were found.");
  }
}

createIndex();
