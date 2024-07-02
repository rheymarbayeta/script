// Inline Page
var pageInput = {
    pageType: "custom",
    name: "crbd5_invoice_1d98c",
};
var navigationOptions = {
    target: 1
};
Xrm.Navigation.navigateTo(pageInput, navigationOptions)
    .then(
        function () {
            // Called when page opens
        }
    ).catch(
        function (error) {
            // Handle error
        }
    );