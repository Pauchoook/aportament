export default function map() {
  const contactsMap = document.querySelector("#map");
  const btnMap = document.querySelector("#map-btn");
  const btnMapNext = document.querySelector("#map-btn-next");
  const inputMap = document.querySelector("#map-input");

  if (contactsMap) {
    function init() {
      const center = JSON.parse(contactsMap.dataset.center);
      const zoom = Number(contactsMap.dataset.zoom);

      const map = new ymaps.Map("map", {
        center,
        zoom,
      });

      btnMap.addEventListener("click", () => {
        inputMap.style.display = "block";
        btnMap.remove();
        btnMapNext.style.display = "block";

        btnMapNext.addEventListener("click", () => {
          if (inputMap.value) {
            map.controls.add("routePanelControl", {
              maxWidth: 260,
            });

            var routePanel = map.controls.get("routePanelControl").routePanel;
            routePanel.options.set("adjustMapMargin", true);
            routePanel.state.set({
              fromEnabled: false,
              toEnabled: false,
              from: inputMap.value,
              to: center,
              type: "auto",
            });

            inputMap.remove();
            btnMapNext.remove();
          }
        });
      });

      map.controls.remove("geolocationControl"); // удаляем геолокацию
      map.controls.remove("searchControl"); // удаляем поиск
      map.controls.remove("trafficControl"); // удаляем контроль трафика
      map.controls.remove("typeSelector"); // удаляем тип
      map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove("zoomControl"); // удаляем контрол зуммирования
      map.controls.remove("rulerControl"); // удаляем контрол правил
    }

    ymaps.ready(init);
  }
}
