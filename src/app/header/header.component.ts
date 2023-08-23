import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent{
    @Output() view = new EventEmitter<string>();
    collapsed=true
    

    changeView(selectedView) {
      this.view.emit(selectedView)
    }

  

}