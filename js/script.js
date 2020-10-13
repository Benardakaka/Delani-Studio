   $(document).ready(function () {
    $(".design").click(function () {
        $("#designImg").toggle();
        $("#designContent").toggle();
    });


    $(".development").click(function () {
        $("#developmentImg").toggle();
        $("#developmentContent").toggle();
    });


    $(".productManagement").click(function () {
        $("#managementImg").toggle();
        $("#managementContent").toggle();
    });


    $("#img1").mouseover(function () {
        $("#project1").show();
    }).mouseout(function () {
        $("#project1").hide(5000);
    });



    $("#img2").mouseover(function () {
        $("#project2").show();
    }).mouseout(function () {
        $("#project2").hide(5000);
    });


    $("#img3").mouseover(function () {
        $("#project3").show();
    }).mouseout(function () {
        $("#project3").hide(5000);
    });


    $("#img4").mouseover(function () {
        $("#project4").show();
    }).mouseout(function () {
        $("#project4").hide(5000);
    });


    $("#img5").mouseover(function () {
        $("#project5").show();
    }).mouseout(function () {
        $("#project5").hide(4500);
    });


    $("#img6").mouseover(function () {
        $("#project6").show();
    }).mouseout(function () {
        $("#project6").hide(5000);
    });



    $("#img7").mouseover(function () {
        $("#project7").show();
    }).mouseout(function () {
        $("#project7").hide(5000);
    });


    $("#img8").mouseover(function () {
        $("#project8").show();
    }).mouseout(function () {
        $("#project8").hide(5000);
    });
});

function main() {
    var name = document.getElementById("name").value;
    if(name){
    alert("Hello,"+ name + " we have received your message. Thank you for reaching out to us. *");
} 
}





