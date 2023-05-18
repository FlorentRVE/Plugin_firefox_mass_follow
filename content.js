// Écouter les messages envoyés depuis l'extension
browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "clickButtons") {
  
      // Sélectionner tous les boutons avec les classes correspondantes
      var boutons = document.getElementsByClassName("button.artdeco-button--secondary");
      var inputs = document.getElementsByClassName("artdeco-button__text");
  
      // Parcourir tous les boutons et effectuer un clic sur chacun d'eux
      for (var i = 0; i < boutons.length; i++) {
        boutons[i].click();
      }

      for(var i = 0; i < inputs.length; i++) {
        inputs[i].click();
      }
  
      // Envoyer un message à l'extension pour indiquer que les boutons ont été cliqués
      browser.runtime.sendMessage({action: "clickedButtons"});
    }
  });
  