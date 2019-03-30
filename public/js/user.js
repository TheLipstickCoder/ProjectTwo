$(document).ready(function() {
    var $newItemInput = $("input.new-item");

    var $goalContainer = $(".goal-container");

    $(document).on("submit", "#goal-form", insertGoal);

    var goals = [];

    getGoals();


})

function updateGoal(goal) {
    $.ajax({
        method: "PUT",
        url: "/public/registration",
        data: goal
    }).then(getGoals);
}