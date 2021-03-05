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
	$(".activity-btn").click(function() {
        $(this).toggleClass('act-pressed')
        $(this).blur()
    });

    $(".mood-btn").click(function() {
        $(this).toggleClass('mood-pressed')
        $(this).blur()
    });

    $(".symptom-btn").click(function() {
        $(this).toggleClass('symp-pressed')
        $(this).blur()
    })

}



function addUserData() {
    let activities = []
    let moods = []
    let symptoms = []
    let data = {}
    var todayDate = new Date();

    $('.log-data').click(function() {
        // Get the activities
        $('.act-pressed').each(function() {
            activities.push($(this).html())
        })

        // Get the moods
        $('.mood-pressed').each(function() {
            moods.push($(this).html())
        })

        // Get the symptoms
        $('.symp-pressed').each(function() {
            symptoms.push($(this).html())
        })

        data = {
            date: todayDate.toDateString(),
            activity: activities,
            mood: moods,
            symptom: symptoms
        }

        console.log(data)
        // Now I gotta figure out what to do with this data...
    })
}
