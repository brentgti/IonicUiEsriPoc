import { Component, OnInit, NgZone } from '@angular/core';

import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss', 'mdcp_font_style.css', 'mdcp_gui_style.css'],
})
export class HomePage implements OnInit {

  constructor(private zone: NgZone) { }

  displayMessage = function (message) {

    var div_content_message = document.getElementById("content-message");
    div_content_message.classList.remove("open-content-message");
    div_content_message.classList.add("open-content-message");
    div_content_message.innerHTML = message;

    setTimeout(function () {
      div_content_message.classList.remove("open-content-message");

    }, 6000);
  }

  initializeMap() {
    const map = new WebMap({
      basemap: "gray"
    });

    const view = new MapView({
      container: "viewDiv",
      map: map
    });
  }

  ngOnInit(): any {
    this.zone.runOutsideAngular(() => {
      // Initialize MapView and return an instance of MapView
      this.initializeMap();
    });
  }
}
