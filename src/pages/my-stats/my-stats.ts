import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the MyStatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-stats',
  templateUrl: 'my-stats.html',
})
export class MyStatsPage {
    @ViewChild('wasteCanvas') wasteCanvas;
    @ViewChild('calcWasteCanvas')  calcWasteCanvas;
   
    wasteChart: any;
    calcWasteChart:any;
    totalWaste: number = 81;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    ionViewDidLoad() {
        this.wasteChart = new Chart(this.wasteCanvas.nativeElement, {
            type: 'pie',
            data: {
                labels: ["Trash", "Recyclables"],
                datasets: [{
                    label: '# of Votes',
                    data: [25,75],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                    ]
                }]
            },
            options: {
                tooltips: {
                    callbacks: {
                        label: function(tooltipItems, data) {
                            var i, label = [], l = data.datasets.length;
                            for (i = 0; i < l; i += 1) {
                                label[i] = data.labels[i] + ' : ' + data.datasets[i].data[tooltipItems.index] + ' lbs';
                            }
                            return label
                        }
                    }
                }
            }

        });

        this.calcWasteChart = new Chart(this.calcWasteCanvas.nativeElement, {
            type: 'pie',
            data: {
                labels: ["Plastic", "Aluminium", "Metal", "Glass", "Paper", "Other"],
                datasets: [{
                    label: '# of Votes',
                    data: [37, 25, 5, 17, 3, 13],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(251, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            },
            options: {
                aspectRatio: 1.7,
                // responsive: true,
                // borderWidth: 27,
                legend: {
                    // usePointStyle: true
                    fullWidth: false
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItems, data) {
                            var i, label = [], l = data.datasets.length;
                            for (i = 0; i < l; i += 1) {
                                label[i] = data.labels[i] + ' : ' + data.datasets[i].data[tooltipItems.index] + 'lbs';
                            }
                            return label
                        }
                    }
                }
            }

        });
    }
}
