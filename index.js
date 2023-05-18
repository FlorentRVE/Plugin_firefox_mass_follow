// Ajouter un événement clic sur le bouton pour exécuter la fonction principale
document.getElementById("click-button").addEventListener("click", function() {

    // Récupérer l'onglet actif
    browser.tabs.query({currentWindow: true, active: true}).then(function(tabs) {
      var activeTab = tabs[0];
  
      // Envoyer un message à l'onglet actif pour exécuter le code de contenu
      browser.tabs.sendMessage(activeTab.id, {action: "clickButtons"});
    });
  });
  
  // Écouter les messages envoyés depuis le code de contenu
  browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "clickedButtons") {
      console.log("Les boutons ont été cliqués !");
    }
  });
  