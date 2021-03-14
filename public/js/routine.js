// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
    addUserData()
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".routine-btn").click(function() {
        $(this).toggleClass('routine-pressed')
        $(this).blur()
    });

    $(".supplement-btn").click(function() {
        $(this).toggleClass('sup-pressed')
        $(this).blur()
    });

    $(".med-btn").click(function() {
        $(this).toggleClass('med-pressed')
        $(this).blur()
    })

}



function addUserData() {
    let activities = []
    let supplements = []
    let medications = []
    let data = {}
    var todayDate = new Date();

    $('.log-data').click(function() {
        // Get the activities
        $('.act-pressed').each(function() {
            activities.push($(this).html())
        })

        // Get the supplements
        $('.sup-pressed').each(function() {
            supplements.push($(this).html())
        })

        // Get the medications
        $('.med-pressed').each(function() {
            medications.push($(this).html())
        })

        data = {
            date: todayDate.toDateString(),
            activity: activities,
            supplement: supplements,
            medication: medications
        }

        console.log(data)

        window.location.href="/index"
    })
}