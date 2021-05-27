import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  slideConfig = {
		"slidesToShow": 6,
		"slidesToScroll": 3,
		"nextArrow": "<div class='nav-btn next-slide'></div>",
		"prevArrow": "<div class='nav-btn prev-slide'></div>",
		"dots": false,
		"infinite": true,
		"autoplay": true,
		"arrows": true,
		"centerMode": true,
		"variableWidth": true,
		"responsive": [
			{
				breakpoint: 1276,
				settings: {
					arrows: true,
					centerMode: true,
					variableWidth: true,
					slidesToShow: 5
				}
			},
			{
				breakpoint: 1060,
				settings: {
					arrows: true,
					centerMode: true,
					variableWidth: true,
					slidesToShow: 4
				}
			},
			{
				breakpoint: 854,
				settings: {
					arrows: false,
					centerMode: false,
					variableWidth: true,
					slidesToShow: 4
				}
			},
		]
	};
  carousel = {
    title: "Top Rated Products",
    products: [
      {
        name: "Cosmic Byte GS430 Gaming Headphone",
        image:"https://m.media-amazon.com/images/I/7154EWu-5LL._AC_UY218_.jpg",
        url: "https://www.amazon.com"
      },
      {
        name: "Cosmic Byte GS430 Gaming Headphone",
        image:"https://m.media-amazon.com/images/I/516Me50yUlL._AC_UY218_.jpg",
        url: "https://www.amazon.com"
      },
      {
        name: "Cosmic Byte GS430 Gaming Headphone",
        image:"https://m.media-amazon.com/images/I/71BOWn8NVuL._AC_UY218_.jpg",
        url: "https://www.amazon.com"
      },
      {
        name: "Cosmic Byte GS430 Gaming Headphone",
        image:"https://m.media-amazon.com/images/I/71XYoOrQd0L._AC_UY218_.jpg",
        url: "https://www.amazon.com"
      },
      {
        name: "Cosmic Byte GS430 Gaming Headphone",
        image:"https://m.media-amazon.com/images/I/7129BE0L+ZL._AC_UY218_.jpg",
        url: "https://www.amazon.com"
      },
      {
        name: "Cosmic Byte GS430 Gaming Headphone",
        image:"https://m.media-amazon.com/images/I/61m8ZyGvL2L._AC_UY218_.jpg",
        url: "https://www.amazon.com"
      },
      {
        name: "Cosmic Byte GS430 Gaming Headphone",
        image:"https://m.media-amazon.com/images/I/71YK5sQzzFL._AC_UY218_.jpg",
        url: "https://www.amazon.com"
      },
    ]
  }
}
