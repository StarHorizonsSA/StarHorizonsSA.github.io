const shipData = {
    "Silver 1 Card Pack": {class: 0, rarity: "silver", crew: 1, crewRarity: "silver"},
    "Gold 1 Card Pack": {class: 0, rarity: "gold", crew: 1, crewRarity: "gold"},
    "Platinum 1 Card Pack": {class: 0, rarity: "platinum", crew: 1, crewRarity: "platinum"},
    "Silver 5 Card Pack": {class: 0, rarity: "silver", crew: 5, crewRarity: "silver"},
    "Gold 5 Card Pack": {class: 0, rarity: "gold", crew: 5, crewRarity: "gold"},
    "Platinum 5 Card Pack": {class: 0, rarity: "platinum", crew: 5, crewRarity: "platinum"},
    "Platinum 10 Card Pack": {class: 0, rarity: "platinum", crew: 10, crewRarity: "platinum"},
    "fimbul airbike": {class: 1, rarity: "common", crew: 1, crewRarity: "silver"},
    "opal jet": {class: 1, rarity: "common", crew: 1, crewRarity: "silver"},
    "vzus solos": {class: 1, rarity: "common", crew: 1, crewRarity: "silver"},
    "ogrika ruch": {class: 1, rarity: "common", crew: 1, crewRarity: "silver"},
    "fimbul ecos unibomba": {class: 1, rarity: "epic", crew: 1, crewRarity: "gold"},
    "pearce x4": {class: 1, rarity: "common", crew: 1, crewRarity: "silver"},
    "opal jetjet": {class: 2, rarity: "uncommon", crew: 2, crewRarity: "silver"},
    "fimbul lowbie": {class: 2, rarity: "common", crew: 2, crewRarity: "silver"},
    "pearce x5": {class: 2, rarity: "uncommon", crew: 2, crewRarity: "silver"},
    "ogrika niruch": {class: 2, rarity: "rare", crew: 2, crewRarity: "gold"},
    "calico scud": {class: 2, rarity: "common", crew: 1, crewRarity: "silver"},
    "calico maxhog": {class: 2, rarity: "uncommon", crew: 2, crewRarity: "silver"},
    "vzus ambwe": {class: 3, rarity: "rare", crew: 3, crewRarity: "gold"},
    "rainbow chi": {class: 3, rarity: "epic", crew: 1, crewRarity: "gold"},
    "fimbul byos earp": {class: 3, rarity: "rare", crew: 2, crewRarity: "gold"},
    "tufa feist": {class: 3, rarity: "epic", crew: 2, crewRarity: "gold"},
    "calico medtech": {class: 3, rarity: "uncommon", crew: 2, crewRarity: "silver"},
    "ogrika mik": {class: 3, rarity: "rare", crew: 2, crewRarity: "gold"},
    "pearce r6": {class: 3, rarity: "uncommon", crew: 2, crewRarity: "silver"},
    "busan thrill of life": {class: 3, rarity: "rare", crew: 2, crewRarity: "gold"},
    "pearce x6": {class: 3, rarity: "rare", crew: 3, crewRarity: "gold"},
    "armstrong industries tip": {class: 3, rarity: "uncommon", crew: 3, crewRarity: "silver"},
    "opal rayfam": {class: 3, rarity: "rare", crew: 2, crewRarity: "gold"},
    "calico shipit": {class: 3, rarity: "rare", crew: 2, crewRarity: "gold"},
    "calico ats enforcer": {class: 4, rarity: "uncommon", crew: 2, crewRarity: "silver"},
    "calico compakt hero": {class: 4, rarity: "rare", crew: 4, crewRarity: "gold"},
    "calico evac": {class: 4, rarity: "uncommon", crew: 7, crewRarity: "silver"},
    "pearce f4": {class: 4, rarity: "rare", crew: 4, crewRarity: "gold"},
    "fimbul mamba": {class: 4, rarity: "uncommon", crew: 5, crewRarity: "silver"},
    "fimbul mamba ex": {class: 4, rarity: "epic", crew: 5, crewRarity: "gold"},
    "rainbow om": {class: 4, rarity: "epic", crew: 4, crewRarity: "gold"},
    "vzus opod": {class: 4, rarity: "rare", crew: 5, crewRarity: "gold"},
    "fimbul byos ranger": {class: 4, rarity: "rare", crew: 5, crewRarity: "gold"},
    "fimbul byos packlite": {class: 4, rarity: "rare", crew: 5, crewRarity: "gold"},
    "ogrika tursic": {class: 4, rarity: "epic", crew: 4, crewRarity: "gold"},
    "armstrong industries tap": {class: 4, rarity: "rare", crew: 5, crewRarity: "gold"},
    "rainbow arc": {class: 5, rarity: "epic", crew: 14, crewRarity: "gold"},
    "opal bitboat": {class: 5, rarity: "epic", crew: 21, crewRarity: "gold"},
    "fimbul ecos greenader": {class: 5, rarity: "epic", crew: 20, crewRarity: "gold"},
    "pearce r8": {class: 5, rarity: "epic", crew: 15, crewRarity: "gold"},
    "ogrika sunpaa": {class: 5, rarity: "epic", crew: 19, crewRarity: "gold"},
    "ogrika thripid": {class: 5, rarity: "legendary", crew: 11, crewRarity: "platinum"},
    "fimbul byos butch": {class: 5, rarity: "epic", crew: 15, crewRarity: "gold"},
    "vzus ballad": {class: 6, rarity: "epic", crew: 51, crewRarity: "gold"},
    "fimbul ecos bombarella": {class: 6, rarity: "legendary", crew: 63, crewRarity: "platinum"},
    "pearce c9": {class: 6, rarity: "legendary", crew: 59, crewRarity: "platinum"},
    "pearce d9": {class: 6, rarity: "legendary", crew: 41, crewRarity: "platinum"},
    "fimbul sledbarge": {class: 6, rarity: "legendary", crew: 41, crewRarity: "platinum"},
    "calico guardian": {class: 6, rarity: "legendary", crew: 47, crewRarity: "platinum"},
    "ogrika jod asteris": {class: 6, rarity: "legendary", crew: 63, crewRarity: "platinum"},
    "busan maiden heart": {class: 6, rarity: "legendary", crew: 51, crewRarity: "platinum"},
    "armstrong industries imp": {class: 6, rarity: "legendary", crew: 43, crewRarity: "platinum"},
    "pearce c11": {class: 7, rarity: "legendary", crew: 109, crewRarity: "platinum"},
    "fimbul byos tankship": {class: 7, rarity: "legendary", crew: 76, crewRarity: "platinum"},
    "fimbul ecos treearrow": {class: 7, rarity: "anomaly", crew: 118, crewRarity: "platinum"},
    "fimbul ecos superphoenix": {class: 9, rarity: "anomaly", crew: 347, crewRarity: "platinum"},
    "pearce t1": {class: 9, rarity: "anomaly", crew: 212, crewRarity: "platinum"},
    "busan the last stand": {class: 9, rarity: "anomaly", crew: 265, crewRarity: "platinum"},
    "rainbow phi": {class: 9, rarity: "anomaly", crew: 255, crewRarity: "platinum"}
    // Add more ship data here
};

// Midpoint FMV values from the table
const midpointFMV = {
    common: 5.08,
    uncommon: 8.16,
    rare: 13.39,
    epic: 114.19,
    legendary: 214.99,
    anomaly: 3505.00 
};

let results = [];

// Populate ship options menu dynamically
window.onload = function() {
    const shipSelect = document.getElementById('ship-type');
    for (const ship in shipData) {
        const option = document.createElement('option');
        option.value = ship;
        option.text = ship;
        shipSelect.add(option);
    }
};

document.getElementById('ship-form').addEventListener('submit', function(event) {
    console.log("Form submit event triggered");

    event.preventDefault();
    console.log("Default form submission prevented");

    // Validate input
    if (isNaN(numberOfShips) || numberOfShips <= 0) {
        alert("Please enter a valid positive number of ships.");
        numberOfShipsInput.focus(); // Focus the input field to correct the error
        return; // Stop the form submission
    }

    const shipType = document.getElementById('ship-type').value;
    const numberOfShips = parseInt(document.getElementById('number-of-ships').value);

    const ship = shipData[shipType];
    const totalCrew = ship.crew * numberOfShips;

    let silverCrew = 0, goldCrew = 0, platinumCrew = 0;
    if (ship.crewRarity === "silver") {
        silverCrew = totalCrew;
    } else if (ship.crewRarity === "gold") {
        goldCrew = totalCrew;
    } else if (ship.crewRarity === "platinum") {
        platinumCrew = totalCrew;
    }

    const resultEntry = {
        shipName: shipType,
        shipClass: ship.class,
        shipRarity: ship.rarity,
        numberOfShips: numberOfShips,
        silverCrew: silverCrew,
        goldCrew: goldCrew,
        platinumCrew: platinumCrew
    };

    results.push(resultEntry);
    updateResultsTable();
    
    console.log("After adding ship:", results); // Log the state after adding the ship

    // Show the "Finish: Download/View Results" button once a ship is added
    document.getElementById('download-btn').style.display = 'inline-block';

    document.getElementById('ship-form').reset();
    console.log("Form reset");
});


function updateResultsTable() {
    const tableBody = document.getElementById('results-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    let totalShips = 0;
    let totalSilver = 0;
    let totalGold = 0;
    let totalPlatinum = 0;

    results.forEach(result => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = result.shipName;

        const classCell = row.insertCell(1);
        classCell.innerText = result.shipClass;
        classCell.classList.add('centered'); // Center-align class data

        row.insertCell(2).innerText = result.shipRarity;

        const numberOfShipsCell = row.insertCell(3);
        numberOfShipsCell.innerText = result.numberOfShips.toLocaleString();
        numberOfShipsCell.classList.add('numeric'); 

        const silverCrewCell = row.insertCell(4);
        silverCrewCell.innerText = result.silverCrew.toLocaleString();
        silverCrewCell.classList.add('numeric'); 

        const goldCrewCell = row.insertCell(5);
        goldCrewCell.innerText = result.goldCrew.toLocaleString();
        goldCrewCell.classList.add('numeric'); 

        const platinumCrewCell = row.insertCell(6);
        platinumCrewCell.innerText = result.platinumCrew.toLocaleString();
        platinumCrewCell.classList.add('numeric'); 

        totalShips += result.numberOfShips;
        totalSilver += result.silverCrew;
        totalGold += result.goldCrew;
        totalPlatinum += result.platinumCrew;
    });

    document.getElementById('total-ships').innerText = totalShips.toLocaleString();
    //document.getElementById('total-ships').classList.add('numeric'); // Right-align total ships
    document.getElementById('total-silver').innerText = totalSilver.toLocaleString();
    //document.getElementById('total-silver').classList.add('numeric'); // Right-align total silver
    document.getElementById('total-gold').innerText = totalGold.toLocaleString();
    //document.getElementById('total-gold').classList.add('numeric'); // Right-align total gold
    document.getElementById('total-platinum').innerText = totalPlatinum.toLocaleString();
    //document.getElementById('total-platinum').classList.add('numeric'); // Right-align total platinum
}

// Function to calculate crew members based on number of ships and tier
function calculateCrewMembers(numberOfShips, tier) {
    const probabilities = {
        silver: { common: 0.8657, uncommon: 0.0866, rare: 0.0433, epic: 0.0043, legendary: 0.00009, anomaly: 0.00000043 },
        gold: { common: 0, uncommon: 0.8684, rare: 0.0868, epic: 0.0434, legendary: 0.0013, anomaly: 0.0000043 },
        platinum: { common: 0, uncommon: 0, rare: 0.9009, epic: 0.0901, legendary: 0.00901, anomaly: 0.000045 }
    };

    const tierProbabilities = probabilities[tier];

    if (!tierProbabilities) {
        console.error("Invalid tier:", tier);
        return {
            common: 0,
            uncommon: 0,
            rare: 0,
            epic: 0,
            legendary: 0,
            anomaly: 0
        };
    }

    return {
        common: numberOfShips * tierProbabilities.common,
        uncommon: numberOfShips * tierProbabilities.uncommon,
        rare: numberOfShips * tierProbabilities.rare,
        epic: numberOfShips * tierProbabilities.epic,
        legendary: numberOfShips * tierProbabilities.legendary,
        anomaly: numberOfShips * tierProbabilities.anomaly
    };
}
// Variables to track cumulative totals
let cumulativeCrewEstimates = {
    common: 0,
    uncommon: 0,
    rare: 0,
    epic: 0,
    legendary: 0,
    anomaly: 0
};

// Update the Crew Estimates table with the new Cost Basis column
function updateCrewEstimates(crewEstimates) {
    // Accumulate the totals
    cumulativeCrewEstimates.common += crewEstimates.common;
    cumulativeCrewEstimates.uncommon += crewEstimates.uncommon;
    cumulativeCrewEstimates.rare += crewEstimates.rare;
    cumulativeCrewEstimates.epic += crewEstimates.epic;
    cumulativeCrewEstimates.legendary += crewEstimates.legendary;
    cumulativeCrewEstimates.anomaly += crewEstimates.anomaly;

    // Helper function to calculate cost or show "Not Applicable"
    function calculateCost(crewCount, midpointValue) {
        const integerCrewCount = Math.floor(crewCount); // Get the integer part
        return integerCrewCount >= 1 
            ? (integerCrewCount * midpointValue).toFixed(2)  // Calculate cost for the integer part only
            : null;  // Return null if less than 1 crew member
    }

    // Calculate the cost basis values
    const commonCost = calculateCost(cumulativeCrewEstimates.common, midpointFMV.common);
    const uncommonCost = calculateCost(cumulativeCrewEstimates.uncommon, midpointFMV.uncommon);
    const rareCost = calculateCost(cumulativeCrewEstimates.rare, midpointFMV.rare);
    const epicCost = calculateCost(cumulativeCrewEstimates.epic, midpointFMV.epic);
    const legendaryCost = calculateCost(cumulativeCrewEstimates.legendary, midpointFMV.legendary);
    const anomalyCost = calculateCost(cumulativeCrewEstimates.anomaly, midpointFMV.anomaly);

    // Update the results in the HTML with proper formatting
    document.getElementById('common-result').textContent = cumulativeCrewEstimates.common.toFixed(4);
    document.getElementById('common-cost').textContent = commonCost !== null ? `$${commonCost}` : "Not Applicable";

    document.getElementById('uncommon-result').textContent = cumulativeCrewEstimates.uncommon.toFixed(4);
    document.getElementById('uncommon-cost').textContent = uncommonCost !== null ? `$${uncommonCost}` : "Not Applicable";

    document.getElementById('rare-result').textContent = cumulativeCrewEstimates.rare.toFixed(4);
    document.getElementById('rare-cost').textContent = rareCost !== null ? `$${rareCost}` : "Not Applicable";

    document.getElementById('epic-result').textContent = cumulativeCrewEstimates.epic.toFixed(4);
    document.getElementById('epic-cost').textContent = epicCost !== null ? `$${epicCost}` : "Not Applicable";

    document.getElementById('legendary-result').textContent = cumulativeCrewEstimates.legendary.toFixed(4);
    document.getElementById('legendary-cost').textContent = legendaryCost !== null ? `$${legendaryCost}` : "Not Applicable";

    document.getElementById('anomaly-result').textContent = cumulativeCrewEstimates.anomaly.toFixed(6);
    document.getElementById('anomaly-cost').textContent = anomalyCost !== null ? `$${anomalyCost}` : "Not Applicable";
}



// Function to handle the "Add Ship" button
function addShip() {
    console.log("Before adding ship:", results); // Log the state before adding a new ship

    // Normal ship addition logic
    const shipType = document.getElementById('ship-type').value;
    const numberOfShips = parseInt(document.getElementById('number-of-ships').value);

    // Access the ship data to get the crewRarity (tier)
    const shipInfo = shipData[shipType];

    // Guard against invalid inputs
    if (!shipInfo || isNaN(numberOfShips) || numberOfShips <= 0) {
        console.error("Invalid input: shipType or numberOfShips is not valid.");
        return;
    }    

    const tier = shipInfo.crewRarity; // Retrieve the tier from crewRarity

    // Calculate the total number of crew members for this ship addition
    const totalCrew = shipInfo.crew * numberOfShips;  

    // Calculate the crew members for this ship addition
    const crewEstimates = calculateCrewMembers(totalCrew, tier);

    // Update the cumulative crew estimates
    updateCrewEstimates(crewEstimates);

    // Update the results array
    results.push({
        shipName: shipType,
        shipClass: shipInfo.class,
        shipRarity: shipInfo.rarity,
        numberOfShips: numberOfShips,
        silverCrew: tier === 'silver' ? totalCrew : 0,  
        goldCrew: tier === 'gold' ? totalCrew : 0,      
        platinumCrew: tier === 'platinum' ? totalCrew : 0
    });

    // Add the ship to the current results table
    updateResultsTable();

    // Show the "Download & View Results" button
    document.getElementById('download-btn').style.display = 'inline-block';

    // Reset the form fields to their default values
    document.getElementById('ship-form').reset();
    console.log("Form fields reset");

    console.log("After adding ship:", results); // Log the state after adding the ship
}


// Function to update the totals row in the results table
function updateTotals() {
    const totalShips = document.getElementById('total-ships');
    const totalSilver = document.getElementById('total-silver');
    const totalGold = document.getElementById('total-gold');
    const totalPlatinum = document.getElementById('total-platinum');

    let ships = 0, silver = 0, gold = 0, platinum = 0;

    // Use the results array to calculate totals instead of the HTML table
    results.forEach(result => {
        ships += result.numberOfShips;
        silver += result.silverCrew;
        gold += result.goldCrew;
        platinum += result.platinumCrew;
    });

    totalShips.textContent = ships.toLocaleString();
    totalSilver.textContent = silver.toLocaleString();
    totalGold.textContent = gold.toLocaleString();
    totalPlatinum.textContent = platinum.toLocaleString();
}

// Attach the event listener to the "Add Ship" button
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();
    addShip();
});


function downloadResults() {
    console.log("Before download starts:", results); // Log the state before download

    let resultText = 'Ship Name                \tClass\tRarity\t\t# Ships\t\tSilver\t\tGold\t\tPlatinum\n';
    results.forEach(result => {
        resultText += `${result.shipName.padEnd(24)}\t${result.shipClass.toString().padStart(5)}\t${result.shipRarity.padEnd(12)}\t${result.numberOfShips.toString().padStart(7)}\t${result.silverCrew.toString().padStart(14)}\t${result.goldCrew.toString().padStart(12)}\t${result.platinumCrew.toString().padStart(16)}\n`;
    });

    resultText += `Total                    \t     \t       \t\t${document.getElementById('total-ships').innerText.padStart(7)}\t${document.getElementById('total-silver').innerText.padStart(14)}\t${document.getElementById('total-gold').innerText.padStart(12)}\t${document.getElementById('total-platinum').innerText.padStart(16)}\n`;

    const blob = new Blob([resultText], { type: 'text/plain' });
    const downloadUrl = window.URL.createObjectURL(blob);

    // Open the file in a new tab
    window.open(downloadUrl, '_blank');

    console.log("After download logic:", results); // Log the state after download logic

    // Download the file
    const downloadAnchor = document.createElement('a');
    downloadAnchor.download = 'ship_crew_results.txt';
    downloadAnchor.href = downloadUrl;
    downloadAnchor.style.display = 'none';
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
}

function resetData() {
    console.log("Reset Data button clicked");

    // Clear the results array
    results = [];
    console.log("Results array after reset:", results);

    // Clear the table body by removing all rows
    const tableBody = document.getElementById('results-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';  // This removes all existing rows in the table
    console.log("Table body cleared");

    // Reset the totals in the UI
    document.getElementById('total-ships').innerText = '0';
    document.getElementById('total-silver').innerText = '0';
    document.getElementById('total-gold').innerText = '0';
    document.getElementById('total-platinum').innerText = '0';
    console.log("Totals reset to 0");

    // Reset the cumulative crew estimates
    cumulativeCrewEstimates = {
        common: 0,
        uncommon: 0,
        rare: 0,
        epic: 0,
        legendary: 0,
        anomaly: 0
    };

    // Reset the cumulative crew estimates in the UI
    document.getElementById('common-result').textContent = '0';
    document.getElementById('uncommon-result').textContent = '0';
    document.getElementById('rare-result').textContent = '0';
    document.getElementById('epic-result').textContent = '0';
    document.getElementById('legendary-result').textContent = '0';
    document.getElementById('anomaly-result').textContent = '0';
    console.log("Cumulative crew estimates reset to 0");

    // Clear the Cost Basis column values
    document.getElementById('common-cost').textContent = '$0.00';
    document.getElementById('uncommon-cost').textContent = '$0.00';
    document.getElementById('rare-cost').textContent = '$0.00';
    document.getElementById('epic-cost').textContent = '$0.00';
    document.getElementById('legendary-cost').textContent = '$0.00';
    document.getElementById('anomaly-cost').textContent = '$0.00';

    // Reset the form fields to their default values
    document.getElementById('ship-form').reset();
    console.log("Form fields reset");

    console.log("ResetData function completed");
}



