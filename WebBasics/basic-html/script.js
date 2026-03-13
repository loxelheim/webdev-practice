
const helloWorld = () => {
    console.log("Hello World!");
    return "Salutations have been spoken";
}

helloWorld()

// Setting variables, Template Literals, and console methods
// ###################################

// let itGo = "The Cold never bothered me anyways";
// const antly = "running in Cicles";


// const add = (z1, z2) => z1 + z2;
// console.log(add(2,5));


// let age = 31;
// const ageStatus = age >= 18 ? "adult":"minor";
// console.warn(ageStatus);


// const what = "Literals";
// let thereBe = `Template ${what}!`;
// console.error(thereBe);


// let user = null;
// const displayName = user ?? "Guest";
// console.log(`Welcome, ${displayName}!`);

// ###################################

const spectrum = document.querySelector("#spectrum");

const doTheColors = () => {
    const specs = document.querySelectorAll("#spectrum .spec");
    const specsLen = specs.length;
    const hslColorUnit = Math.round(360 / specsLen);

    let colorStop = 0;

    specs.forEach(spec => {
        spec.style.backgroundColor = `hsl(${colorStop}, 100%, 50%)`
        colorStop = colorStop + hslColorUnit;
    });
}
doTheColors();

const addMoreColorStops = () => {
    const newSpec = document.createElement("div");
    newSpec.classList.add("spec");
    spectrum.appendChild(newSpec);

    doTheColors();
}