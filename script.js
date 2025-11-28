// =============== GLOBAL HELPERS ===============
function getChecked(selector) {
    return Array.from(document.querySelectorAll(selector + ":checked")).map(x => x.value);
}

// =============== VITALS CHECKER ===============
function checkVitals() {
    let hr = Number(document.getElementById("hr").value);
    let temp = Number(document.getElementById("temp").value);
    let bp = Number(document.getElementById("bp").value);

    let out = "<h3>Vitals Report</h3>";

    if (hr > 110) out += "• High heart rate detected<br>";
    if (hr < 50) out += "• Low heart rate detected<br>";
    if (temp > 38) out += "• High body temperature (fever)<br>";
    if (bp > 140) out += "• High blood pressure<br>";

    if (out === "<h3>Vitals Report</h3>")
        out += "• All vitals are normal ✔️<br>";

    document.getElementById("vitalsResult").innerHTML = out;
}

// =============== SYMPTOM CHECKER ===============
function checkSymptoms() {
    let symptoms = getChecked(".sym");
    let out = "<h3>Symptom Analysis</h3>";

    if (symptoms.includes("fever") && symptoms.includes("cough"))
        out += "• Possible viral fever / flu<br>";

    if (symptoms.includes("acidity"))
        out += "• Possible acidity or gastritis<br>";

    if (symptoms.includes("dizziness"))
        out += "• Possible dehydration or low BP<br>";

    if (symptoms.includes("chest"))
        out += "<strong style='color:red'>• Chest tightness is serious!</strong><br>";

    if (symptoms.length === 0)
        out += "• No symptoms selected<br>";

    document.getElementById("symptomResult").innerHTML = out;
}

// =============== ALLERGY DETECTOR ===============
function checkAllergy() {
    let food = getChecked(".food");
    let skin = getChecked(".skin");
    let resp = getChecked(".resp");

    let pollen = document.getElementById("pollen").value;
    let dust = document.getElementById("dust").value;

    let out = "<h3>Allergy Analysis</h3>";

    if (food.includes("nuts") && skin.includes("rash"))
        out += "• Nut allergy likely<br>";

    if (food.includes("milk") && resp.includes("cough"))
        out += "• Possible dairy sensitivity<br>";

    if (pollen === "high" && resp.includes("sneeze"))
        out += "• Pollen allergy likely<br>";

    if (dust === "yes" && resp.includes("cough"))
        out += "• Dust allergy detected<br>";

    if (resp.includes("breath"))
        out += "<strong style='color:red'>• Breathlessness is dangerous</strong><br>";

    if (out === "<h3>Allergy Analysis</h3>")
        out += "• No major allergy signs<br>";

    document.getElementById("allergyResult").innerHTML = out;
}

// =============== WELLNESS CHECKER + HEALTH SCORE ===============

function checkWellness() {
    let water = Number(document.getElementById("water").value);
    let sleep = Number(document.getElementById("sleep").value);

    let out = "<h3>Wellness Summary</h3>";
    let score = 100;

    if (water < 6) { out += "• Low hydration 💧<br>"; score -= 10; }
    if (sleep < 7) { out += "• Low sleep hours 😴<br>"; score -= 10; }

    if (water >= 6 && sleep >= 7)
        out += "• Great wellness levels ✔️<br>";

    // Display results
    document.getElementById("wellnessResult").innerHTML = out;

    // Update health score
    document.getElementById("scoreNum").innerText = score;
    document.getElementById("scoreFill").style.width = score + "%";

    if (score > 70) document.getElementById("scoreFill").style.background = "#22c55e";
    else if (score > 40) document.getElementById("scoreFill").style.background = "#facc15";
    else document.getElementById("scoreFill").style.background = "#ef4444";
}