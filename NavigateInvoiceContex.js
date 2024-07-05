function openPageInlineWithContext(entityName, recordId) {
    let pageInput = {
        pageType: "custom",
        name: "crbd5_invoice_1d98c", // Replace with your actual custom page name
        entityName: entityName,
        recordId: recordId,
    };

    let navigationOptions = {
        target: 1 // Use 2 to open in the side pane if needed, else use 1 for inline
    };

    Xrm.Navigation.navigateTo(pageInput, navigationOptions)
        .then(
            function () {
                console.log("Navigation successful");
            }
        ).catch(
            function (error) {
                console.log("Navigation error:", error.message); // Handle error
            }
        );
}

function executeCommand() {
    try {
        var formContext = Xrm.Page;
        var entityName = formContext.data.entity.getEntityName();
        var recordId = formContext.data.entity.getId().replace(/[{}]/g, "");// Remove curly braces
        var projectNumber = formContext.getAttribute("crbd5_projectnumber").getValue(); // Replace "projectnumber" with your actual attribute name

        console.log("Entity Name:", entityName);
        console.log("Record ID:", recordId);
        console.log("Project No.:", projectNumber);

        openPageInlineWithContext(entityName, recordId);
    } catch (error) {
        console.error("Error in executeCommand:", error.message);
    }
}
