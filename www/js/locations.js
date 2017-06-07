/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('locations', [])

.service('locations', [function(){
    var locations = [
        {
            'name': 'East SanJose'
        },
        {
            'name': 'West SanJose'
        },
        {
            'name': 'North SanJose'
        },
        {
            'name': 'South SanJose'
        },
        {
            'name': 'Downtown'
        }
    ]
    
    var ret = {
        'locations': locations
    }
    return ret;
}]);