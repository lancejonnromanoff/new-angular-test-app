import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
	persons = [];
	constructor(private apiService: ApiService) { }
	ngOnInit() {
		this.apiService.get().subscribe((data: any[])=>{
			console.log(data);
			this.persons = data;
		})
	}
}
