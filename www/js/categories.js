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
            'name': 'Spirituality'
        },
        {
            'name': 'Concerts'
        },
        {
            'name': 'Conferences'
        },
        {
            'name': 'Family'
        },
        {
            'name': 'Fund Raisers'
        },
        {
            'name': 'Museums'
        },
        {
            'name': 'Night life'
        },
        {
            'name': 'Pets'
        },
        {
            'name': 'Politics'
        },
        {
            'name': 'Food'
        }
    ]
    
    var ret = {
        'categories': categories
    }
    return ret;
}]);
