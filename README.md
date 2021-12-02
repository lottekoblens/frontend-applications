# :desktop_computer: Frontend Applications

## :bookmark_tabs:	 Table of Contents

* [Concept](https://github.com/lottekoblens/frontend-applications#bulb-concept)
* [Proces](https://github.com/lottekoblens/frontend-applications#chart_with_upwards_trend-proces)
* [Installation](https://github.com/lottekoblens/frontend-applications#wrench-installation)
* [Data](https://github.com/lottekoblens/frontend-applications/#file_folder-data)
* [Wishlist](https://github.com/lottekoblens/frontend-applications#pencil-wishlist)
* [Assignment](https://github.com/lottekoblens/frontend-applications#clipboard-assignment)
  * [Rubric](https://github.com/lottekoblens/frontend-applications#page_facing_up-rubric)
* [Resources](https://github.com/lottekoblens/frontend-applications#mag_right-resources)
* [License](https://github.com/lottekoblens/frontend-applications#page_with_curl-license)

## :bulb: Concept

![Bar chart](https://github.com/lottekoblens/frontend-applications/blob/main/barchart.gif) ![Pie chart](https://github.com/lottekoblens/frontend-applications/blob/main/piechart.gif)

I've been working on this project for two weeks. In those two weeks I had to make a visualization with D3 and React. I displayed the data of the most popular songs of The Netherlands in a bar chart. The bar chart has a filter with two options:

* Show the duration of the song
* Show the amount of listeners of the song.

On the y scale the name of the song will be displayed as you can see above. I also added an hover. With this hover the data about the bar on which you hover will be displayed. This can also be seen above in the first gif.

On the other page I created a pie chart. This pie chart is created after the user selects a range as you can see in the second gif. The pie chart displays the amount of listeners and it has the percentage of the parts of the total. So one song has for example 8% of listeners of the total amount of listeners. This pie chart also displays more information when the user hovers over it.

## :chart_with_upwards_trend: Proces

If you want to know more about my proces. You can read my [Wiki](https://github.com/lottekoblens/frontend-applications/wiki)!

## :wrench: Installation

If you want to use this code you have to clone the repository by putting this in your terminal: 

``` git clone https://github.com/lottekoblens/frontend-applications.git```

Then install everything with:

``` npm install ```

After that you can run the project by simply typing this in your terminal:

```npm start```

## :file_folder:	 Data

The data I use, is fetched from the API Last.fm. I fetch the top numbers of The Netherlands. Then I use the name of the song, the duration of the song and the amount of listeners.


## :pencil: Wishlist

* Put functions of Bar chart and Pie chart in components instead of putting it all in the same files.
* Add a transition to the pie chart (but this was very difficult and I didn't have enough time so I couldn't fix this) 

## :clipboard: Assignment

Create a client-side application in JavaScript which dynamically renders data to views using either a front-end framework or system created by you. Reflect on the merits and costs of frameworks together.

### :page_facing_up: Rubric

![Rubric](./Rubric.png)

## :mag_right: Resources

* Tutorials Teacher. (z.d.). Piecharts with D3. Geraadpleegd op 26 november 2021, van https://www.tutorialsteacher.com/d3js/create-pie-chart-using-d3js

## :page_with_curl: License

Author: Lotte Koblens, license by [MIT](https://github.com/lottekoblens/frontend-applications/blob/main/LICENSE)
