import { Component } from '@angular/core';
import { PetService, Pet, StoreService } from 'core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'app';

	constructor(private petService: PetService, private storeService: StoreService) {
		this.petService.getPetById(603205).subscribe((res: Pet) => {
			console.log('pet: ', res);
		});

		this.petService.getPetIdsByStatus('sold').subscribe((res) => {
			console.log('ids: ', res);
		});
		
		this.petService.get(15435006011094).subscribe( res => {
			console.log('get with generic function', res)
		})

		this.storeService.getStoreInventory().subscribe(res => {
			console.log('store: ', res);
		});
	}
}
