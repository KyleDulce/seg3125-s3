const serviceCardHtml = `
<div class="card mx-auto my-3 serviceCard" style="width: 40rem;">
    <div class="card-header font-other"><i class="bi {icon}"></i> <b>{name}</b></div>
        <div class="card-body">
            <div class="service-description font-other">{description}</div>&nbsp;
            <div class="service-features">
                <ul class="service-features-list">
                    {features-list}
                </ul>
            </div>
        </div>
    <div class="card-footer">
        <a href="/seg3125-s3/book">
            <button type="button" class="btn btn-primary font-other color-background-primary-3">Book Consultation</button>
        </a>
    </div>
</div>
`;

const agentCardHtml = `
<div class="card mx-auto my-3 agentCard" style="width: 15rem;">
    <div class="card-header font-other"><b>{name}</b></div>
        <div class="card-body">
            <div class="agent-picture">{img}</div>&nbsp;
            <div class="agent-description font-other"><i class="bi {icon}"></i> {description}</div>
        </div>
</div>
`;

const bankCardHtml = `
<div class="card mx-auto my-3 branchCard" style="width: 60rem;">
    <div class="card-header font-other"><b>{name}</b></div>
    <div class="card-body container">
        <div class="row">
            <div class="col-6 bankInfoCard font-other">
                <p><b>Address:</b> {address}</p>
                <p><b>Phone:</b> {phone}</p>
                <p><b>Hours:</b></p> 
                <div id="hours-div" class="font-other">
                    <p><b>Sun:</b> {sunHours}</p>
                    <p><b>Mon-Fri:</b> {dayHours}</p>
                    <p><b>Sat:</b> {satHours}</p>
                </div>
            </div>
            <div class="col-6 d-flex flex-column">
                <iframe class="mx-auto" 
                    src="{mapRef}" 
                    width="400" height="300" style="border:0;" 
                    allowfullscreen="" loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>                       
            </div>
        </div>
    </div>
</div>
`;

const services = [
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

const agents = [
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
];

const bankLocs = [
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
]

$(document).ready(function() {

    //services
    let resultStringService = "";
    services.forEach(item => {
        //deep clone string
        let workingCard = serviceCardHtml.repeat(1);
        workingCard = workingCard.replace("{name}", item.name);
        workingCard = workingCard.replace("{icon}", item.icon);
        workingCard = workingCard.replace("{description}", item.description);

        let ulList = "";
        item.features.forEach(feature => {
            ulList = ulList.concat("<li>", feature, "</li>\n");
        });
        workingCard = workingCard.replace("{features-list}", ulList);

        resultStringService = resultStringService.concat(workingCard, "\n");
    });
    $("#serviceCards").html(resultStringService);

    //agents
    let resultStringAgent = "";
    agents.forEach(item => {
        //deep clone string
        let workingCard = agentCardHtml.repeat(1);
        workingCard = workingCard.replace("{name}", item.name);
        workingCard = workingCard.replace("{icon}", item.icon);
        workingCard = workingCard.replace("{description}", item.description);
        workingCard = workingCard.replace("{img}", `<img src="${item.pictureLoc}" class="mx-auto" alt="Profile Picture" style="width: 100%;" />`);

        resultStringAgent = resultStringAgent.concat(workingCard, "\n");
    });
    $("#agentCards").html(resultStringAgent);

    let resultStringBank = "";
    bankLocs.forEach(item => {
        //deep clone string
        let workingCard = bankCardHtml.repeat(1);
        workingCard = workingCard.replace("{name}", item.name);
        workingCard = workingCard.replace("{address}", item.address);
        workingCard = workingCard.replace("{phone}", item.phone);
        workingCard = workingCard.replace("{sunHours}", item.sunHours);
        workingCard = workingCard.replace("{dayHours}", item.dayHours);
        workingCard = workingCard.replace("{satHours}", item.satHours);
        workingCard = workingCard.replace("{mapRef}", item.mapRef);

        resultStringBank = resultStringBank.concat(workingCard, "\n");
    });
    $("#bankCards").html(resultStringBank);
});
