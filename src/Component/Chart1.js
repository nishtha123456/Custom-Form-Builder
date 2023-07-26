import * as d3 from "d3";
import { data } from "jquery";
import {useRef, useEffect} from "react";

export default function Chart1(){
const Dummy_Data=[{id:1,region:'india',vaue:10},
                    {id:2,region:'america',vaue:12},
                     {id:3,region:'germany',vaue:11},
                     {id:3,region:'china',vaue:6}
                    ];
               useEffect=()=>
               {
                drawBarChart(Dummy_Data)
               }
         function drawBarChart(Dummy_Data){           
         
      const Chart_height=1000;
      const Chart_width=800;

      const x=d3.scaleBand().rangeRound([0,Chart_width]).padding(0.1);
      const y=d3.scaleLinear().range([Chart_height,0]);
      const line = d3.line((d, i) => x(i), y);

      const ChartContainer=d3
                            .select('svg')
                            .attr('width',Chart_width)
                            .attr('height',Chart_height);
        
        x.domain(Dummy_Data.map((d)=>d.region));
        y.domain([0,d3.max(Dummy_Data,d=>d.value)+3]);

       const Chart=ChartContainer.append('g');

       Chart.selectAll('.bar')
            .data(Dummy_Data)
            .enter()
            .append('rect')
            .classed('bar',true)
            .attr('width',x.bandwidth())
             .attr('height',(data)=>Chart_height-y(data.value))
             .attr(x,(data)=>x(data.region))
             .attr(y,(data)=>y(data.value));

         Chart.selectAll('.lable').data(Dummy_Data).enter().append('text').text((data)=>data.value)
                .attr(x,(data)=>data.region)
                .attr(y,(data)=>data.value-20);   
         }    

    return(
<>
<div id='app'>
<div id='chart'>
<svg></svg>
</div>
<div id='data'>
    <ul></ul>
</div>
</div>
</>
    );
}