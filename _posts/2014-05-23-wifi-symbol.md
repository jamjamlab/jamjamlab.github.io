---
layout: post
title:  "Lets make shapes using d3.js!"
date:   2014-05-23 14:33:10
categories: d3.js
---

To start off I felt I needed more pjazz on the main page of my website.

In addition, its a good first step for me due to several reasons:

 * Learn to utilize d3.js - d3 will come very handy later for visualizing data and on-the-go svg graphics
 * Make my website more pretty
 * It's fun

Something that catches the eye of readers! Something that symbolizeds my interst in networking new people... So a wifi symbol. 

Here's the list of step I took to make this symbol a reality.

## Step 1: drawing it out

To begin with I started with skeches; I guess I didn't need this step after all, but here it is:

<img src="http://i.imgur.com/l4g6V3T.jpg" class="img-responsive" alt="Responsive image">

But you get the idea. I will be going for somthing very minimal and universal.

## Step 2: download d3.js and required components 

You can download d3.js here: 


## Step 3: 

{% highlight js %}
    var dataset = [0, 1, 2, 3, 4];

    var arc = d3.svg.arc()
        .innerRadius(function(d) {
            return d * 30;
        })
        .outerRadius(function(d) {
            return (d * 30 + 20);
        })
        .startAngle(-1 / 4 * Math.PI)
        .endAngle(1 / 4 * Math.PI);

    var svg = d3.select("#wifi").append("svg")
        .attr("width", 280)
        .attr("height", 140)
        .selectAll("g")
        .data(dataset)
        .enter()
        .append("g")
        .attr("transform", "translate(140,140)");

    var arcs = svg.append("path")
        .attr("fill", "#ce96de")
        .attr("id", function(d, i) {
            return "s" + i;
        })
        .attr("d", arc);
{% endhighlight %}

{# highlight js #}
 
    var dataset = [0, 1, 2, 3, 4];

    var arc = d3.svg.arc()
        .innerRadius(function(d) {
            return d * 30;
        })
        .outerRadius(function(d) {
            return (d * 30 + 20);
        })
        .startAngle(-1 / 4 * Math.PI)
        .endAngle(1 / 4 * Math.PI);

    var svg = d3.select("#wifi").append("svg")
        .attr("width", 280)
        .attr("height", 140)
        .selectAll("g")
        .data(dataset)
        .enter()
        .append("g")
        .attr("transform", "translate(140,140)");

    var arcs = svg.append("path")
        .attr("fill", "#ce96de")
        .attr("id", function(d, i) {
            return "s" + i;
        })
        .attr("d", arc);
{# endhighlight #}