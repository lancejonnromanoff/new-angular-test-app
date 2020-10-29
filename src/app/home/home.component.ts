import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
	persons = [];

	constructor(
    private apiService: ApiService
) { }

	ngOnInit() {
		this.apiService.get().subscribe((data: any[])=>{
			console.log(data);
			this.persons = data;
		})


    var data = [];

            $(document).ready(function () {
            $("#button").click(function (ssnumber_search) {
                var searchId = String($('#searchBox').val());
                data.forEach(function (ssnumber_search) {
                    if (ssnumber_search.ssn == searchId) {
                        $("span")
                         .html(ssnumber_search.firstname + '&nbsp;' + ssnumber_search.lastname);
                    }
                });
            });
        });

            function getdata() {
                var xmlhttp = new XMLHttpRequest();
                var url = "http://localhost:3000/persons";
                //var data = [];
                xmlhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        data = JSON.parse(this.responseText);
                    }
                };
                xmlhttp.open("GET", url, true);
                xmlhttp.send();
            }

            getdata();

	}
}
