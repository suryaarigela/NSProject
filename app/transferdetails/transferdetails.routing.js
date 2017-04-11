"use strict";
var router_1 = require('@angular/router');
var transferdetails_component_1 = require('./transferdetails.component');
exports.transferDetailsRouting = router_1.RouterModule.forRoot([
    {
        path: 'transferdetails/:from/:toAddress', component: transferdetails_component_1.TransferDetailsComponent
    }
]);
//# sourceMappingURL=transferdetails.routing.js.map