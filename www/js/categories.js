angular.module('categories', [])

.service('categories', [function(){
    var categories = [
        {
            'name': 'Education'
        },
        {
            'name': 'Fitness'
        },
        {
            'name': 'Religious'
        }
    ]
    
    var ret = {
        'categories': categories
    }
    return ret;
}]);
