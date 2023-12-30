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

$(document).ready(function() {

    let confirmationMessage = JSON.parse(sessionStorage.getItem("confirmationMessage"));
    console.log(confirmationMessage);
    //services
    let item = confirmationMessage.bank;
    //deep clone string
    let workingCard = bankCardHtml.repeat(1);
    workingCard = workingCard.replace("{name}", item.name);
    workingCard = workingCard.replace("{address}", item.address);
    workingCard = workingCard.replace("{phone}", item.phone);
    workingCard = workingCard.replace("{sunHours}", item.sunHours);
    workingCard = workingCard.replace("{dayHours}", item.dayHours);
    workingCard = workingCard.replace("{satHours}", item.satHours);
    workingCard = workingCard.replace("{mapRef}", item.mapRef);

    let resultStringBank = workingCard.concat("\n");
    $("#bankCard").html(resultStringBank);

    let descriptionText = $("#Description").html();
    descriptionText = descriptionText.replace("{address}", item.address);
    descriptionText = descriptionText.replace("{agent}", confirmationMessage.agent);
    descriptionText = descriptionText.replace("{time}", confirmationMessage.time);
    descriptionText = descriptionText.replace("{reason}", confirmationMessage.reason);
    descriptionText = descriptionText.replace("{email}", confirmationMessage.email);
    $("#Description").html(descriptionText);
});