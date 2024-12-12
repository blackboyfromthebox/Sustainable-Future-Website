// Array containing 100 sustainability tips
const tips = [
    "Save water by fixing leaks.",
    "Use reusable bags to reduce plastic waste.",
    "Switch to energy-efficient appliances.",
    "Plant trees to improve air quality.",
    "Switch off lights when not in use.",
    "Eat locally grown food to reduce your carbon footprint.",
    "Compost food waste to enrich soil.",
    "Use public transportation instead of personal vehicles.",
    "Carry a reusable water bottle.",
    "Recycle paper, plastic, and glass waste.",
    "Reduce energy consumption by unplugging electronics when not in use.",
    "Use solar panels if possible.",
    "Avoid fast fashion and buy sustainable clothing.",
    "Participate in community cleanups.",
    "Donate old clothes instead of throwing them away.",
    "Install low-flow showerheads to save water.",
    "Collect rainwater for gardening.",
    "Replace single-use items with reusable alternatives.",
    "Use LED light bulbs to save energy.",
    "Cook meals at home to avoid excess packaging waste.",
    "Buy products with minimal or no packaging.",
    "Plant a home garden to grow your own vegetables.",
    "Avoid printing unless necessary to save paper.",
    "Use rechargeable batteries instead of disposable ones.",
    "Support companies that prioritize sustainability.",
    "Avoid plastic straws; use metal or bamboo alternatives.",
    "Organize carpooling with friends or coworkers.",
    "Turn off your car engine when idling.",
    "Avoid bottled water; use a filter at home.",
    "Invest in a programmable thermostat to save energy.",
    "Use a clothesline instead of a dryer when possible.",
    "Switch to natural cleaning products.",
    "Advocate for renewable energy in your community.",
    "Share books instead of buying new ones.",
    "Support local farmers by shopping at farmers' markets.",
    "Choose reusable coffee cups instead of disposable ones.",
    "Repair broken items instead of replacing them.",
    "Use both sides of paper before recycling.",
    "Reduce meat consumption to lower your carbon footprint.",
    "Install double-pane windows for better insulation.",
    "Use eco-friendly beauty products.",
    "Walk or bike for short trips.",
    "Recycle old electronics properly.",
    "Buy energy-efficient windows and doors.",
    "Participate in tree-planting initiatives.",
    "Encourage friends to adopt sustainable practices.",
    "Upcycle old furniture instead of buying new.",
    "Avoid flushing wipes; dispose of them properly.",
    "Use natural fertilizers in gardening.",
    "Avoid microbeads in beauty products.",
    "Choose biodegradable products whenever possible.",
    "Educate children about the importance of sustainability.",
    "Use a reusable razor instead of disposable ones.",
    "Install a rain garden to manage stormwater.",
    "Donate unused electronics to those in need.",
    "Use sustainable transportation options, like electric scooters.",
    "Shop secondhand for clothing and furniture.",
    "Turn off your computer when not in use.",
    "Choose a laptop over a desktop for lower energy consumption.",
    "Wash clothes in cold water to save energy.",
    "Skip preheating the oven when unnecessary.",
    "Avoid overwatering plants to conserve water.",
    "Recycle old books and magazines.",
    "Take shorter showers to save water.",
    "Use cloth napkins instead of paper ones.",
    "Avoid plastic utensils; use metal or bamboo ones.",
    "Volunteer for environmental campaigns.",
    "Install motion sensors for outdoor lighting.",
    "Avoid single-use plastic bags for fruits and vegetables.",
    "Choose eco-friendly diapers for babies.",
    "Use a reusable lunchbox instead of disposable bags.",
    "Clean up litter in your local park.",
    "Use handkerchiefs instead of tissue paper.",
    "Reduce holiday decorations that create waste.",
    "Buy recycled paper products.",
    "Avoid helium balloons; choose reusable decorations.",
    "Start a compost bin at home.",
    "Switch to digital subscriptions instead of physical ones.",
    "Collect and reuse greywater from washing machines.",
    "Use wool dryer balls instead of fabric softeners.",
    "Turn your lawn into a wildflower meadow.",
    "Avoid palm oil products that contribute to deforestation.",
    "Insulate your home to save energy.",
    "Teach others about reducing their carbon footprint.",
    "Organize a sustainability workshop in your community.",
    "Choose hybrid or electric vehicles.",
    "Keep your car tires properly inflated for better fuel efficiency.",
    "Replace old appliances with energy-efficient models.",
    "Support conservation projects financially or by volunteering.",
    "Reduce your use of air conditioning.",
    "Bring your own cutlery to avoid single-use plastic ones.",
    "Opt for slow travel to reduce carbon emissions.",
    "Recycle packing materials like bubble wrap.",
    "Switch to eco-friendly laundry detergents.",
    "Avoid single-use makeup wipes.",
    "Sign petitions advocating for environmental laws.",
    "Avoid over-ordering food to reduce waste.",
    "Use natural pest control methods in gardening.",
    "Track your energy usage and work to lower it."
];

// Function to display a random sustainability tip
function showTip() {
    const randomIndex = Math.floor(Math.random() * tips.length); // Generate a random number
    const tipElement = document.getElementById("tip"); // Find the element to display the tip
    tipElement.textContent = tips[randomIndex]; // Update the text with a random tip
}
