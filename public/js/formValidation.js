$(document).ready(function () {
    $("#userForm").submit(function (e) {
        e.preventDefault(); // Prevent the default form submission

        const formData = {
            name: $("#name").val().trim(),
            company: $("#company").val().trim(),
            email: $("#email").val().trim()
        };

        $.ajax({
            url: "/", // Same route handles rendering and submission
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(formData),
            success: function (response) {
                if (response.success) {
                    $("#responseMessage").text(response.message).css("color", "green");
                    $("#userForm")[0].reset(); // Clear the form
                } else {
                    $("#responseMessage").text(response.message).css("color", "red");
                }
            },
            error: function (xhr) {
                $("#responseMessage").text(xhr.responseText).css("color", "red");
            }
        });
    });
});