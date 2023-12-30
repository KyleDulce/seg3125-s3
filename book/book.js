const serviceRadioHtml = `
<div class="form-check font-other">
    <input class="form-check-input" type="radio" name="{type}Input" id="{type}Input{id}" value="{id}" required>
    <label class="form-check-label" for="{type}Input{id}">{name}</label>
</div>
`;

const serviceRadioHtmlChecked = `
<div class="form-check font-other">
    <input class="form-check-input" type="radio" name="{type}Input" id="{type}Input{id}" value="{id}" checked required>
    <label class="form-check-label" for="{type}Input{id}">{name}</label>
</div>
`;

const validationError = `
<div id="ErrorMessage" class="font-other"><b>Not all required information has been filled out!</b></div>
`

const locRadioList = [
    {
        name: "Main Branch",
        address: "123 Main Street Anytown Ontario Canada",
        phone: "(123) 456-7890",
        sunHours: "Closed",
        dayHours: "8am - 9pm",
        satHours: "9am - 9pm",
        mapRef: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8481.807806723968!2d-75.60790082106452!3d45.36202297850715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0939bc326483%3A0x2dba7b9a743f66eb!2s3359%20Davidson%20Rd%2C%20Ramsayville%2C%20ON%20K0A%202Y0!5e0!3m2!1sen!2sca!4v1654202240520!5m2!1sen!2sca"
    },
    {
        name: "AnyOtherTown Branch",
        address: "123 Main Street AnyOthertown Ontario Canada",
        phone: "(123) 456-7890",
        sunHours: "7am - 8pm",
        dayHours: "9am - 9pm",
        satHours: "9am - 9pm",
        mapRef: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184199.94130453278!2d-80.05979943282402!3d43.83252507409202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b04187950ca63%3A0xa9509dc48b5ca223!2sCaledon%2C%20ON!5e0!3m2!1sen!2sca!4v1654704478918!5m2!1sen!2sca"
    },
    {
        name: "Quebec Branch",
        address: "123 Main Street Anytown Quebec Canada",
        phone: "(123) 456-7890",
        sunHours: "8am - 10pm",
        dayHours: "9am - 10pm",
        satHours: "8am - 9pm",
        mapRef: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174428.5542516028!2d-75.51837405278856!3d46.91360960500939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cdac69f930c1887%3A0xdaed14fe53ce288d!2sSainte-Anne-du-Lac%2C%20Antoine-Labelle%20Regional%20County%20Municipality%2C%20QC!5e0!3m2!1sen!2sca!4v1654704554703!5m2!1sen!2sca"
    }
];

const serviceRadioList = [
    {
        name: "Basic Account",
        description: "Account with no fees for just those who needs a simple account",
        icon: "bi-piggy-bank",
        features: [
            "No Fees",
            "High daily limits",
            "Free Overdraft protection"
        ]
    },
    {
        name: "Premium Account",
        description: "Account for those who wants to take control of their banking",
        icon: "bi-cash-coin",
        features: [
            "Monthly Fee: $20",
            "Unlimited daily limits",
            "Overdraft protection"
        ]
    },
    {
        name: "Small Business Account",
        description: "An account for small businesses who wants all the insights on their spending",
        icon: "bi-briefcase",
        features: [
            "$30",
            "No Limit Banking",
            "Monthly Revenue report"
        ]
    },
    {
        name: "US Personal Account",
        description: "Account for storing the U.S Dollar",
        icon: "bi-currency-dollar",
        features: [
            "$1 USD",
            "Easy currency exchange",
            "Overdraft protection"
        ]
    },
    {
        name: "Basic Credit Card",
        description: "A basic card for those who need one",
        icon: "bi-credit-card",
        features: [
            "No Annual Fee",
            "Good Credit limits",
            "Low purchase rates"
        ]
    },
    {
        name: "Premium Credit Card",
        description: "A Premium card for those who wants to make most out of their card",
        icon: "bi-credit-card-2-front",
        features: [
            "Annual Fee: $40 ",
            "Higher Credit Limits",
            "Points on every purchase"
        ]
    }
];

const agentList = [
    {
        name: "Kristina Williams",
        pictureLoc: "/seg3125-s3/resources/63457-3-1.png",
        description: "Customer Service representative",
        icon: "bi-person"
    },
    {
        name: "John Doe",
        pictureLoc: "/seg3125-s3/resources/63457-1-1.png",
        description: "Financial Planner",
        icon: "bi-piggy-bank"
    },
    {
        name: "Emily Smith",
        pictureLoc: "/seg3125-s3/resources/63457-5-3.png",
        description: "Financial Planner",
        icon: "bi-piggy-bank"
    },
    {
        name: "Sophie Miles",
        pictureLoc: "/seg3125-s3/resources/63457-3-5.png",
        description: "Investment Advisor",
        icon: "bi-graph-up-arrow"
    },
    {
        name: "Brian Crawford",
        pictureLoc: "/seg3125-s3/resources/63457-1-5.png",
        description: "Mutal Fund Representative",
        icon: "bi-cash-coin"
    },
    {
        name: "Glen Singh",
        pictureLoc: "/seg3125-s3/resources/63457-1-3.png",
        description: "Personal Banker",
        icon: "bi-bank"
    }
]

const months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
]

const startTimeHour = 8;
const endTimeHour = 9;
const minuteStep = 15;

$(document).ready(function() {

    let resultStringLoc = "";
    let id = 0;
    locRadioList.forEach(item => {
        //deep clone string
        let workingCard = serviceRadioHtml.repeat(1);
        if(id == 0) {
            workingCard = serviceRadioHtmlChecked.repeat(1);
        }
        workingCard = workingCard.replaceAll("{id}", id++);
        workingCard = workingCard.replaceAll("{name}", `${item.name}: ${item.address}`);
        workingCard = workingCard.replaceAll("{type}", "loc");

        resultStringLoc = resultStringLoc.concat(workingCard, "\n");
    });
    $("#locRadio").replaceWith(resultStringLoc);

    let resultStringService = "";
    id = 0;
    serviceRadioList.forEach(item => {
        //deep clone string
        let workingCard = serviceRadioHtml.repeat(1);
        workingCard = workingCard.replaceAll("{id}", id++);
        workingCard = workingCard.replaceAll("{name}", item.name);
        workingCard = workingCard.replaceAll("{type}", "service");

        resultStringService = resultStringService.concat(workingCard, "\n");
    });
    $("#serviceRadio").replaceWith(resultStringService);

    let resultStringAgent = "";
    id = 0;
    agentList.forEach(item => {
        //deep clone string
        let workingCard = serviceRadioHtml.repeat(1);
        workingCard = workingCard.replaceAll("{id}", id++);
        workingCard = workingCard.replaceAll("{name}", `${item.name}: ${item.description}`);
        workingCard = workingCard.replaceAll("{type}", "service");

        resultStringAgent = resultStringAgent.concat(workingCard, "\n");
    });
    $("#agentRadio").replaceWith(resultStringAgent);

    let resultOptionsTime = "";
    //am
    for(let hour = startTimeHour; hour <= 12; hour++) {
        for(let minute = 0; minute < 60; minute += minuteStep) {
            let minuteString = minute.toLocaleString(undefined, {
                minimumIntegerDigits: 2, 
                useGrouping:false
            });
            resultOptionsTime = resultOptionsTime.concat(
                `<option class="font-other" id="time${hour}${minuteString}">${hour}:${minuteString}${hour == 12? "pm" : "am"}</option>\n`
            )
        }
    }
    //pm
    for(let hour = 1; hour < endTimeHour; hour++) {
        for(let minute = 0; minute < 60; minute += minuteStep) {
            let minuteString = minute.toLocaleString(undefined, {
                minimumIntegerDigits: 2, 
                useGrouping:false
            });
            resultOptionsTime = resultOptionsTime.concat(
                `<option class="font-other" id="time${hour + 12}${minuteString}">${hour}:${minuteString}pm</option>\n`
            )
        }
    }
    $("#timeInputOptions").replaceWith(resultOptionsTime);

    let date = new Date();

    $("#dateInput")[0].value = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    $("#timeInput")[0].value = "12:00pm";

    $("#datehalfInput1").prop("checked", date.getHours() % 12 == 0);
    $("#datehalfInput2").prop("checked", date.getHours() % 12 != 0);
});

function finished() {
    console.log("submit");

    //auto validate
    let form = $(".needs-validation")[0];
    if(!form.checkValidity()) {
        console.log("Failed validation");
        form.classList.add('was-validated');
        let area = $("#ErrorArea");
        if(area != undefined) {
            area.replaceWith(validationError);
        }
        return;
    }

    let name = $("#nameInput")[0].value
    let email = $("#emailInput")[0].value
    let bank = locRadioList[$('input[name="locInput"]:checked')[0].value]

    let serviceIndex = $('input[name="serviceInput"]:checked')[0].value;
    let service = undefined;
    if(serviceIndex >= 0) {
        service = serviceRadioList[serviceIndex]
    } else {
        service = {};
        service.name = "general Information";
    }

    let agentIndex = $('input[name="agentInput"]:checked')[0].value;
    let agent = undefined;
    if(agentIndex >= 0) {
        agent = agentList[agentIndex]
    } else {
        agent = {};
        agent.name = "any available agent";
    }

    let dateStrSplit = $("#dateInput")[0].value.split("/");
    let month = dateStrSplit[0];
    let day = dateStrSplit[1];
    let year = dateStrSplit[2];
    let time = $("#timeInput")[0].value;

    let result = {};
    result.bank = bank;
    result.agent = agent.name;
    result.time = `${months[month - 1]} ${day}, ${year} at ${time}`
    result.reason = service.name;
    result.email = email;
    result.name = name;

    console.log(result);
    sessionStorage.setItem("confirmationMessage", JSON.stringify(result));
    window.location.href = '/seg3125-s3/confirmation'
}