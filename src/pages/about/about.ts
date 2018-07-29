import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
import * as d3Shape from "d3-shape";
import * as d3Timeformat from "d3-time-format";
import * as d3Format from "d3-format";
import * as d3Time from "d3-time";
import * as d3Transition from "d3-transition"

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})



export class AboutPage {
  public text:any = "test"
  public svg:any
  public theData:any = [1,2,3,4,5]
  public circleRadii:any = [40, 20, 10]
  public i:any = 0
  public returnColor:any

  public spaceCircles:any = [30, 70, 110]

  public testData:Array<any> = [{"time":"2310-10-29 10:17:20","patientid":25,"pat_admweight":12.5,"pat_admlength":85,"age_in_days":747.6125,"admit_date":"2310-10-29 10:15:20","mon_hf":77,"mon_sat":100,"mon_af":20,"ven_mv_insp":2.1,"ven_tv_exp":107,"ven_freq_tot":20,"ven_pres_piek":15.8,"ven_fio2":28.9,"ven_peep":4.3,"ven_pres_mean":8.7,"ser_peep":4.8,"ser_freq":20,"ser_mv":2.21,"ser_fio2":29.9158,"ser_pttype":1},{"time":"2310-10-29 10:18:20","patientid":25,"pat_admweight":12.5,"pat_admlength":85,"age_in_days":747.6125,"admit_date":"2310-10-29 10:15:20","mon_hf":72,"mon_sat":100,"mon_af":20,"ven_mv_insp":2.1,"ven_tv_exp":108,"ven_freq_tot":20,"ven_pres_piek":16,"ven_fio2":28.8,"ven_peep":4.3,"ven_pres_mean":8.9,"ser_peep":4.8,"ser_freq":20,"ser_mv":2.21,"ser_fio2":29.9158,"ser_pttype":1},{"time":"2310-10-29 10:19:20","patientid":25,"pat_admweight":12.5,"pat_admlength":85,"age_in_days":747.6125,"admit_date":"2310-10-29 10:15:20","mon_hf":76,"mon_sat":100,"mon_af":20,"ven_mv_insp":2.1,"ven_tv_exp":108,"ven_freq_tot":20,"ven_pres_piek":16,"ven_fio2":28.6,"ven_peep":4.7,"ven_pres_mean":8.8,"ser_peep":4.8,"ser_freq":20,"ser_mv":2.21,"ser_fio2":29.9158,"ser_pttype":1}];

  constructor(public navCtrl: NavController, public navParams : NavParams) {
  }

  ionViewDidLoad() { 
/*     this.initTest() */
    this.initTimeArray()
    this.returnCircleRadii()
    this.returnGraph()
    console.log('ion did load')
  }

  initTimeArray() {
    var test2data:Array<any> = this.testData.map((d) => { return d.time; })
    var parsetime = d3Timeformat.timeFormat("%Y, %m, %d, %H, %M, %S")
    console.log(test2data)
    console.log(parsetime(new Date(d3Array.max(test2data))))

    d3.select("#tekst").selectAll("p")
    .attr("text-align", "center")
    .text("Saturatie, FiO2");

  }

  // deze wordt momenteel niet gebruikt
  initTest() {
    this.svg = d3.select("#test")
      .append("svg")
      .attr("width", 200)
      .attr("height", 200)

      .selectAll("circle")
      .data(this.circleRadii)
      .enter()
      .append("circle")
      .attr("cx", 50)
      .attr("cy", 50)
      .attr("r", (d: number) => {return this.i + d;}) 
      .style("fill", (d: number) => {
        if (d === 40) { this.returnColor = "green"; }
        else if (d === 20) { this.returnColor = "red"; }
        else if (d === 10) { this.returnColor = "purple"; }
        return this.returnColor;
      });
    console.log(this.i)
    }
  
    returnCircleRadii () {
      var anyArray:Array<any> = [20, 50, 80, 90, 100, 40, 30, 20, 30, 50, 70]
      var x = d3Scale.scaleTime()
                .domain([0, 100])
                .range([0, 500]);      
      
      
      var line:Array<any> = [[20,20], [60,20], [120,80], [180,30], [240,40], [300,30]];
      var predLine1:Array<any> = [[300,30], [360,25], [420,30], [480,30]]
      var predline2:Array<any> = [[300,30], [360,20], [420,20], [480,20]]
      var predline3:Array<any> = [[300,30], [360,45], [420,60], [480,90]]
      var line2:Array<any> = [[20,227], [60,202], [120,175], [180,175], [240,202], [300,202]];
      
      var xBreedte = line.length
      var linegenerator = d3Shape.line()
                                  .curve(d3Shape.curveBasis);

      var linegenerator2 = d3Shape.line()
                                  .curve(d3Shape.curveStepAfter);

                                  
      let i : any
      for (i in anyArray) {
        console.log(x(anyArray[i]));
      }

      console.log(anyArray.map((d) => d / 2));
    
      this.svg = d3.select("#test")
      .append("svg")
      .attr("width", 500)
      .attr("height", 300)
      /* .style("border", "1px solid black") */
      
      this.svg.append("path")
/*           .data([line]) */
          .attr("class", "line")
          .attr("d", (linegenerator(line)))
          .style("stroke", "steelblue")
      
      this.svg.append("path")
          .attr("class", "line")
          .attr("d", (linegenerator(predLine1)))
          .style("stroke", "red")
          .style("stroke-dasharray", "4");
      
      this.svg.append("path")
          .attr("class", "line")
          .attr("d", (linegenerator(predline2)))
          .style("stroke", "steelblue")
          .style("stroke-dasharray", "2.5");

      this.svg.append("path")
          .attr("class", "line")
          .attr("d", (linegenerator(predline3)))
          .style("stroke", "steelblue")
          .style("stroke-dasharray", "2.5");
          
      this.svg.append("path")
                    .attr("class", "line")
                    .attr("d", (linegenerator2(line2)))
                    .style("stroke", "darkgreen")
   
        }   
   returnGraph() {
    var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 20, left: 20},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3Scale.scaleTime()
        .domain([new Date(2018, 5, 10, 10, 0, 0), new Date(2018, 5, 10, 22, 0, 0)])
        .range([0, width]);

    var y = d3Scale.scaleLinear()
        .domain([0, 100])
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
