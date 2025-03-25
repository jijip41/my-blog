_(Image by NASA @Unsplash)_

At work, I was tasked with improving the performance of our web application’s interactive map. The existing implementation used Leaflet, but as our dataset grew to 10K+ assets with complex connections, user interactions such as panning and zooming became sluggish, significantly degrading the user experience.

## The Challenge: Handling 10K+ Assets on a Map

### Why Mapbox? The Key Advantages

To address these performance issues, I switched from Leaflet to Mapbox, and the results were immediately noticeable. Here’s why:

#### WebGL Acceleration

Leaflet relies on the browser’s default rendering engine (Canvas or SVG), which is CPU-intensive, making large datasets a challenge. In contrast, Mapbox uses WebGL, which offloads rendering to the GPU. This allows for smoother interactions, especially when zooming and panning.

#### Vector Tiles vs. Raster Tiles

Mapbox’s vector tile system enables efficient rendering by loading only the necessary data dynamically. Leaflet, on the other hand, primarily depends on raster tiles or manually added layers, which require full reloading, increasing lag.

#### Built-in Layer Features

Mapbox offers a range of out-of-the-box layers and features that optimise performance when handling large datasets. Initially, I attempted to manually implement markers and lines, but this resulted in laggy interactions. Leveraging Mapbox’s clustering and built-in layer features provided a much better user experience.

### Iterating on Features: Enhancing User Interactions

After successfully switching to Mapbox, I began experimenting with additional improvements:

**Dynamic Line Width**: When users clicked on a line, it would thicken for better visibility. However, if interactions happened too quickly, the event listener sometimes failed, causing the thicker state to persist. This was an area I planned to refine further.

**Smooth Tooltips**: Adding interactive tooltips around assets was easy to implement and contributed significantly to a better user experience. I added links to the asset page where users can see more information about the asset.

**User Interaction Enhancements**: Over five days, I iterated and built new features such as edit mode toggles, asset visibility toggles, hover effects, and line width adjustments.

### Trade-offs: Leaflet vs. Mapbox

While Mapbox provided a significant performance boost, there were a few trade-offs:

**Ease of Use**: Leaflet is simpler to set up, while Mapbox has a steeper learning curve. But there are tons of [examples](https://github.com/mapbox/mapbox-react-examples/tree/master/basic) waiting to help you.

**Customisation**: Mapbox provides rich customisation options, but sometimes default behaviors (like event handling) need fine-tuning.

**Cost Considerations**: Unlike Leaflet, which is entirely free, Mapbox has usage-based pricing, which may be a factor depending on the project scale. When I was considering Mapbox, I learned that another squad in my team already had a Mapbox token, so the decision was easy. However, if you have a budget limit, you will need to consider cost-effectiveness..

### Key Takeaways

This migration reinforced the importance of user-centric development—identifying pain points, solving performance issues, and iterating on features rapidly. Switching to Mapbox not only improved performance but also enabled more scalable and interactive features.

At the end of the day, the best development process is one that continuously evolves to address user needs, and this project was a great example of that philosophy in action.
