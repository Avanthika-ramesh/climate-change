document.getElementById('search-btn').addEventListener('click', function() {
    const country = document.getElementById('country').value;
    const resultDiv = document.getElementById('result');

    // Simulated climate data (replace with API call as needed)
    const climateData = {
        "USA": "Throughout 2022, we have seen heat waves, drought, floods, wildfires and tornadoes. And even though hurricane season had a slow start, Hurricane Fiona and Hurricane Ian quickly reminded us of what’s at stake. Fiona left a path of destruction across Puerto Rico that included damaged homes, landslides, flooded roadways and a total blackout of the island's power grid. A week later, Hurricane Ian made landfall in Florida as a catastrophic, Category 4 storm, destroying and flooding homes and businesses and knocking out power to nearly two million people. Parts of the U.S., especially in the West and Midwest, suffered from intense heat waves and devastating drought, leading to rare and extreme flooding over the summer in some areas. ",
        "India": "India is heating up. Between 1901 and 2018, temperatures rose by 1.3 degrees Fahrenheit (0.7 degrees Celsius). A heat wave lasting for weeks caused temperatures to soar above 110 degrees, with some areas hitting 115 degrees. Researchers found that between 2000-2004 and 2017-2021, India saw a 55% increase in deaths due to extreme heat. March’s heat wave killed at least 90 people across India and Pakistan, contributed to forest fires, and devastated farms and India’s wheat yield.",
        "Brazil": "Deforestation in the Amazon affecting climate.",
        "Australia": "More frequent wildfires and droughts.",
        "Pakistan":"In 2022, I saw first-hand how 10 years’ worth of rains were dumped on villages in southern Sindh, triggered by climate change. Five hundred lost their lives due to unprecedented rainfall, the highest recorded since 1961. The rain swallowed 12-year-old Mehreen’s house and belongings. Together with her parents and four siblings, Mehreen lived in a makeshift shelter for months. I met hundreds of children like Mehreen, whose lives were upended by the floods. ",
        "China":"In the summer of 2011, there were six to eight monthly floods listed in China. Last year, more than 130 were recorded in July and 82 in August.",
        "Sudan":"Rising temperatures,altered rainfall pattern,desertification."
    };

    const data = climateData[country] || " Rising temperatures and disruptions to ecosystems and agriculture.";
    resultDiv.textContent = `Climate Change Info for ${country}: ${data}`;
});
