import {Component, ViewChild} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {OrganService} from '../../providers/organ-service-mock';
import {Http} from '@angular/http';
import {LineChart} from '../../assets/data/data';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
import * as d3Shape from "d3-shape";
import * as d3Timeformat from "d3-time-format";
import * as d3Format from "d3-format";
import * as d3Time from "d3-time";
import * as d3Transition from "d3-transition";
import * as d3Fetch from "d3-fetch";


@Component({
    selector: 'page-organ',
    templateUrl: 'organ.html'
})


export class OrganPage {
  public organ: any;
  public text:any = "test"
  public svg:any
  public theData:any = [1,2,3,4,5]
  public circleRadii:any = [40, 20, 10]
  public i:any = 0
  public returnColor:any

  public spaceCircles:any = [30, 70, 110]

  public test:Date;
  public MyArray:Array<any>;

  //new linechart
  public title = 'Beademing afgelopen 24 uur';
  public width: number;
  public height: number;
  public margin = {top: 20, right: 20, bottom: 30, left: 40};

  public x: any;
  public y: any;
  public g: any;

  public testData:Array<any> = [{"time":"2310-10-29 10:17:20","patientid":25,"pat_admweight":12.5,"pat_admlength":85,"age_in_days":747.6125,"admit_date":"2310-10-29 10:15:20","mon_hf":77,"mon_sat":100,"mon_af":20,"ven_mv_insp":2.1,"ven_tv_exp":107,"ven_freq_tot":20,"ven_pres_piek":15.8,"ven_fio2":28.9,"ven_peep":4.3,"ven_pres_mean":8.7,"ser_peep":4.8,"ser_freq":20,"ser_mv":2.21,"ser_fio2":29.9158,"ser_pttype":1},{"time":"2310-10-29 10:18:20","patientid":25,"pat_admweight":12.5,"pat_admlength":85,"age_in_days":747.6125,"admit_date":"2310-10-29 10:15:20","mon_hf":72,"mon_sat":100,"mon_af":20,"ven_mv_insp":2.1,"ven_tv_exp":108,"ven_freq_tot":20,"ven_pres_piek":16,"ven_fio2":28.8,"ven_peep":4.3,"ven_pres_mean":8.9,"ser_peep":4.8,"ser_freq":20,"ser_mv":2.21,"ser_fio2":29.9158,"ser_pttype":1},{"time":"2310-10-29 10:19:20","patientid":25,"pat_admweight":12.5,"pat_admlength":85,"age_in_days":747.6125,"admit_date":"2310-10-29 10:15:20","mon_hf":76,"mon_sat":100,"mon_af":20,"ven_mv_insp":2.1,"ven_tv_exp":108,"ven_freq_tot":20,"ven_pres_piek":16,"ven_fio2":28.6,"ven_peep":4.7,"ven_pres_mean":8.8,"ser_peep":4.8,"ser_freq":20,"ser_mv":2.21,"ser_fio2":29.9158,"ser_pttype":1}]

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public organService: OrganService, public toastCtrl: ToastController, public http: Http) {
    this.organ = this.navParams.data;
    organService.findById(this.organ.id).then(
        organ => this.organ = organ );    
          

  }

  evaluateOrganColor(status, lower, upper) {
    return this.organService.evaluateOrganColor(status, lower, upper);
  }

  ionViewDidLoad()
  {
    var linesGraph1:Array<any> = [
      [[20,20], [60,20], [120,80], [180,30], [240,40], [300,30]],
      [[300,30], [360,25], [420,30], [480,30]],
      [[300,25], [360,20], [420,20], [480,20]],
      [[300,35], [360,45], [420,60], [480,90]],
      [[20,227], [60,202], [100,175], [255,202], [300,202]],
      [[20,180], [60,175], [120,175], [180,185], [240, 190], [300,190]],
      [[300,190], [360,190], [420,190], [480,190]],
      [[300,185], [360,180], [420,180], [480,175]],
      [[300,195], [360,200], [420,200], [480,205]]
      ];
    var linesGenerator1: Array<any> = [0, 0, 0, 0, 1, 0, 0, 0, 0]
    var linesColorGraph1: Array<any> = ["steelblue", "red", "steelblue", "steelblue", "darkgreen", "orange", "orangered", "orange", "orange",]
    var linesDasharrayGraph1: Array<any> = ["0", "4", "2,5", "2,5", "0", "0", "4", "2,5", "2,5",]  

    var linesGraph2:Array<any> = [
      [[20,140], [60,120], [120,100], [180,100], [240,120], [300,130]],
      [[300,130], [360,130], [420,125], [480,125]],
      [[300,125], [360,120], [420,110], [480,90]],
      [[300,135], [360,145], [420,160], [480,190]],
      [[20,237], [100,210], [255,237], [300,237]],
      [[20,220], [300,220]],
      [[300,220], [480,220]],
      ];
    var linesGenerator2: Array<any> = [0, 0, 0, 0, 1, 0, 0, 0, 0]
    var linesColorGraph2: Array<any> = ["steelblue", "red", "steelblue", "steelblue", "darkgreen", "orange", "orangered", "orange", "orange",]
    var linesDasharrayGraph2: Array<any> = ["0", "4", "2,5", "2,5", "0", "0", "4", "2,5", "2,5",]  

    this.initTimeArray();
    this.returnLines("#test", [0,100], linesGraph1, linesColorGraph1, linesDasharrayGraph1, linesGenerator1)
    this.returnLines("#pressure", [0,30], linesGraph2, linesColorGraph2, linesDasharrayGraph2, linesGenerator2)
    console.log('status OK');
  }

// GRAFIEK FUNCTIONS

initTimeArray() {
  var test2data:Array<any> = this.testData.map((d) => { return d.time; })
  var parsetime = d3Timeformat.timeFormat("%Y, %m, %d, %H, %M, %S")
  console.log(test2data)
  console.log(parsetime(new Date(d3Array.max(test2data))))

  d3.select("#tekst").selectAll("p")
  .attr("text-align", "center")
  .text("Saturatie, FiO2");

}

returnLines (div: string, graphDomain: Array<any>, arrayLines: Array<any>, arrayColorLines: Array<any>, arrayDashLines: Array<any>, arrayGenerator: Array<any>) {
  var anyArray:Array<any> = [20, 50, 80, 90, 100, 40, 30, 20, 30, 50, 70]
  var x = d3Scale.scaleTime()
            .domain([0, 100])
            .range([0, 500]);      
  var linegenerator = d3Shape.line()
                              .curve(d3Shape.curveBasis);

  var linegenerator2 = d3Shape.line()
                              .curve(d3Shape.curveStepAfter);

  // make SVG                            
   this.svg = d3.select(div)
  .append("svg")
  .attr("width", 500)
  .attr("height", 300);
  
  // draw lines
  let i : any
  for (i in arrayLines) {
    this.svg.append("path")
    .attr("class", "line")
    .attr("d", function(d) { if (arrayGenerator[i] == 0) { return linegenerator(arrayLines[i]); }
                              else if (arrayGenerator[i] == 1) { return linegenerator2(arrayLines[i]); }})
    .style("stroke", arrayColorLines[i])
    .style("stroke-dasharray", arrayDashLines[i]);
  }

  // current timepoint line
  this.svg.append("g")
      .style("stroke", "black")
      .style("stroke-dasharray", "4")
      .append("line")
      .attr("x1", 300)
      .attr("y1", 20)
      .attr("x2", 300)
      .attr("y2", 280)

  // graphlines    
  var svg = this.svg,
      margin = {top: 20, right: 20, bottom: 20, left: 20},
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom,
      g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3Scale.scaleTime()
    .domain([new Date(2018, 5, 10, 10, 0, 0), new Date(2018, 5, 10, 22, 0, 0)])
    .range([0, width]);

var y = d3Scale.scaleLinear()
    .domain(graphDomain)
    .range([height, 0]);

var xAxis = d3Axis.axisBottom(x)
    .ticks(d3Time.timeHour)
    .tickFormat(d3Timeformat.timeFormat('%H:%M'));

var yAxis = d3Axis.axisRight(y)
    .tickSize(width)

g.append("g")
    .attr("transform", "translate(0," + height + ")")
      .call(customXAxis);

g.append("g")
    .call(customYAxis);

function customXAxis(g) {
  g.call(xAxis);
  g.select(".domain").remove();
}

function customYAxis(g) {
  g.call(yAxis);
  g.select(".domain").remove();
  g.selectAll(".tick:not(:first-of-type) line")
    .attr("stroke", "#777")
    .attr("stroke-dasharray", "2,2");
  g.selectAll(".tick text")
    .attr("x", 4)
    .attr("dy", -4);
}

}

}