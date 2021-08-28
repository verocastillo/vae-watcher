# Final Project: VAE Watch
Repository for our final project, integrating machine learning, web design and visualization, databases and Python programming. Our goal was to create a model that predicts vaccine adverse effects (VAE) and create a visualization dashboard with the data.

# Analysis Results
## Machine Learning: Linear Analysis/Word Analysis
For this analysis, we tried performing linear regressions on several of the variables included in our data. The most interesting findings had to do with age, reaction severity and deaths. Deaths, on one hand, follow a skewed normal distribution, where the most deaths ocurred between people of ages 80 to 90. In terms of age and severity, younger people have stronger reactions (with more symptoms) due to the immune system slowing down with age. However, while being younger can cause you a stronger reaction, you're less likely to die from that reaction.

<div class="row">
  <div class="col-md-3">
      <img class="pictureh" src="https://i.ibb.co/whkCBFJ/agedeaths.png" alt="Card image cap">
  </div>
  <div class="col-md-3">
      <img class="pictureh" src="https://i.ibb.co/26qXFGP/agesev-all.png" alt="Card image cap">
  </div>
  <div class="col-md-3">
      <img class="pictureh" src="https://i.ibb.co/6PW4Ywn/agesev-pfizer.png" alt="Card image cap">
  </div>
  <div class="col-md-3">
      <img class="pictureh" src="https://i.ibb.co/xhh3q90/wordcloudsymptoms.png" alt="Card image cap">
  </div>
</div>

## Tableau Visualizations: Men vs. Women
Women vaccinated more than men overall. However, the difference between men and women who reported adverse effects was interesting. More women in their 30s and 40s reported effects, while men in their 50s and 60s reported more VAEs. 
<div class="col-md-6">
    <img class="pictureh" src="https://i.ibb.co/7jxmrkb/men.png" alt="Card image cap">
</div>
<div class="col-md-6">
    <img class="pictureh" src="https://i.ibb.co/fqHZx3r/women.png" alt="Card image cap">
</div>

## Machine Learning: Vaccine Prediction
Using machine learning, a forecast was made for the number of adverse events reported with the system, which, being proportional, can also forecast future vaccination trends. A clear negative tendency is seen in this forecast,  and this is due to both vaccination slowing down, as well as continuous improvement of vaccines and application protocols.

<div class="col-md-6">
    <img class="pictureh" src="https://i.ibb.co/2s6T6Lj/forecast1.png" alt="Card image cap">
</div>
<div class="col-md-6">
    <img class="pictureh" src="https://i.ibb.co/zncsrq2/forecast2.png" alt="Card image cap">
</div>

### AWS Database
Visit it at: https://bit.ly/vaedb-2021

### Live App
Visit it at: https://vae-project.herokuapp.com/index.html
