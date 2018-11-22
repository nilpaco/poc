import { Component } from '@angular/core';
import { CoreService } from 'core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'app';

	constructor(private service: CoreService) {
		this.service.getPetById(122).subscribe((res) => {
			console.log(res);
		});

		this.service.findPetByStatus('sold').subscribe((res) => {
			console.log(res);
		});
	}
}
