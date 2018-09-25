function getName(url) {
  var parts = url.split('/');
  var filename = parts[parts.length - 1];
  if (filename.indexOf('.') < 0) {
    return "";
  }
  var name = filename.split('.')[0].trim().toLowerCase();
  return name;
}

function updateMainMenu(document) {
  var menu = document.getElementsByClassName('menulink');
  for (var i = 0; i < menu.length; i += 1) {
    var a = menu[i];
    var name = getName(a.href);
    var currentName = getName(document.location.toString());
    console.info("current menu item:", name, currentName);

    if (name == currentName) {
      a.className = "current";
    } else {
      a.className = "menulink";
    }
  }
}

function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1, text.length);
}

function updateNextLink(document) {
  var a = document.getElementById("nextlink");
  var currentName = getName(document.location.toString());
  var currentID = MENU.indexOf(currentName);
  var nextID = (currentID + 1) % MENU.length;
  var nextName = MENU[nextID];
  if (nextName == "") {
    a.text = "Home";
    a.href = SITE_ROOT + "/";
  } else {
    a.text = capitalize(nextName + " explained");
    a.href = SITE_ROOT + "/" + nextName + ".html";
  }
}

(function(document) {
  updateMainMenu(document);
  updateNextLink(document);
})(document);
